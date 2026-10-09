import admin from 'firebase-admin';

let isFirebaseInitialized = false;
let db = null;

/**
 * Initialize Firebase Admin SDK using service account or environment variables
 */
export function initFirebase() {
  if (isFirebaseInitialized) return db;

  try {
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
      console.log('🔥 Firebase Admin SDK initialized successfully');
    } else {
      console.log('ℹ️ Firebase credentials not provided in .env (running in memory/mock storage mode)');
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
