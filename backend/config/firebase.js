import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let isFirebaseInitialized = false;
let db = null;

/**
 * Initialize Firebase Admin SDK using service account file or environment variables
 */
export function initFirebase() {
  if (isFirebaseInitialized) return db;

  try {
    // 1. Check for serviceAccountKey.json in config/ or backend/
    const candidatePaths = [
      process.env.FIREBASE_SERVICE_ACCOUNT_PATH,
      path.join(__dirname, 'serviceAccountKey.json'),
      path.join(__dirname, '../serviceAccountKey.json')
    ].filter(Boolean);

    // Also look for any portfolio firebase-adminsdk json in Downloads if on local machine
    const userHome = process.env.HOME || process.env.USERPROFILE || '';
    const downloadsDir = userHome ? path.join(userHome, 'Downloads') : '';
    if (downloadsDir && fs.existsSync(downloadsDir)) {
      try {
        const files = fs.readdirSync(downloadsDir);
        for (const file of files) {
          if (file.toLowerCase().includes('firebase-adminsdk') && file.endsWith('.json')) {
            candidatePaths.push(path.join(downloadsDir, file));
          }
        }
      } catch (e) {
        // ignore
      }
    }

    let serviceAccount = null;
    for (const candPath of candidatePaths) {
      if (fs.existsSync(candPath)) {
        try {
          const raw = fs.readFileSync(candPath, 'utf8');
          serviceAccount = JSON.parse(raw);
          if (serviceAccount.project_id && serviceAccount.private_key) {
            console.log(`🔥 Loaded Firebase credentials from file: ${path.basename(candPath)}`);
            break;
          }
        } catch (e) {
          // continue
        }
      }
    }

    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      db = admin.firestore();
      isFirebaseInitialized = true;
      console.log('🔥 Firebase Admin SDK initialized successfully with service account file');
      return db;
    }

    // 2. Fall back to environment variables in .env
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined;

    if (projectId && clientEmail && privateKey) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey
        })
      });
      db = admin.firestore();
      isFirebaseInitialized = true;
      console.log('🔥 Firebase Admin SDK initialized successfully via .env');
    } else {
      console.log('ℹ️ Firebase credentials not provided (running in memory/mock storage mode)');
    }
  } catch (err) {
    console.warn('⚠️ Firebase initialization skipped or failed:', err.message);
  }

  return db;
}

/**
 * Save new contact submission to Firebase Firestore
 */
export async function saveContactToFirebase(contactData) {
  try {
    const firestore = initFirebase();
    if (!firestore) {
      return { success: false, mode: 'memory', message: 'Firebase not configured in .env' };
    }

    const docRef = await firestore.collection('contacts').add({
      ...contactData,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`🔥 Contact stored in Firebase Firestore with ID: ${docRef.id}`);
    return { success: true, mode: 'firebase', id: docRef.id };
  } catch (err) {
    console.error('Error saving contact to Firebase:', err);
    return { success: false, error: err.message };
  }
}
