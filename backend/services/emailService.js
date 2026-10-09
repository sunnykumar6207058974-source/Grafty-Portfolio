import nodemailer from 'nodemailer';

/**
 * Configure Nodemailer transport with Gmail or custom SMTP
 */
function createTransporter() {
  const user = process.env.GMAIL_USER ? process.env.GMAIL_USER.trim() : '';
  let pass = process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD.trim().replace(/\s+/g, '') : '';

  if (!user || !pass) {
    return null;
  }

  // Common typo safeguard: Google App Passwords only use lowercase letters a-z
  if (pass.startsWith('I')) {
    pass = 'l' + pass.slice(1);
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  });
}

/**
 * Send Gmail notification to Sunny Kumar's phone when a client submits the contact form
 */
export async function sendAdminNotification({ fullName, email, subject, message, createdAt }) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER || 'sunnykumar6207058974@gmail.com';
  const transporter = createTransporter();

  const formattedDate = new Date(createdAt || Date.now()).toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
        .header { background: linear-gradient(135deg, #090a0d 0%, #1e1b4b 100%); color: #ffffff; padding: 30px; text-align: center; }
        .header h1 { margin: 0 0 8px 0; font-size: 24px; font-weight: 700; }
        .header p { margin: 0; opacity: 0.85; font-size: 14px; }
        .badge { display: inline-block; background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 999px; margin-top: 10px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 6px; }
        .field-value { font-size: 16px; color: #0f172a; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #6366f1; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
        .footer { background: #f1f5f9; padding: 20px; text-align: center; font-size: 13px; color: #64748b; }
        .btn { display: inline-block; background: #6366f1; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Client Inquiry!</h1>
          <p>A new potential client wants to build a website</p>
          <span class="badge">Portfolio Contact Form</span>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Client Name</div>
            <div class="field-value">👤 <strong>${fullName}</strong></div>
          </div>
          <div class="field">
            <div class="field-label">Client Email Address</div>
            <div class="field-value">✉️ <a href="mailto:${email}">${email}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Project Subject</div>
            <div class="field-value">💼 ${subject}</div>
          </div>
          <div class="field">
            <div class="field-label">Client Message / Website Requirements</div>
            <div class="message-box">${message}</div>
          </div>
          <div class="field">
            <div class="field-label">Received At</div>
            <div class="field-value" style="font-size: 13px; color: #64748b;">🕒 ${formattedDate}</div>
          </div>
          <div style="text-align: center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" class="btn">Reply to ${fullName}</a>
          </div>
        </div>
        <div class="footer">
          Grafty Portfolio Notification Engine &bull; Sunny Kumar
        </div>
      </div>
    </body>
    </html>
  `;

  if (!transporter) {
    console.log(`[EmailService] (Demo Mode) Notification for Sunny Kumar's phone:
      To: ${adminEmail}
      Subject: 🔔 New Client Inquiry: ${fullName} wants a website!
      Client: ${fullName} (${email})
      Subject: ${subject}
      Message: ${message}`);
    return { success: true, mode: 'demo', recipient: adminEmail };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Grafty Portfolio" <${process.env.GMAIL_USER}>`,
      to: adminEmail,
      replyTo: email,
      subject: `🔔 New Client Inquiry: ${fullName} wants to make a website!`,
      html: htmlContent
    });
    console.log(`[EmailService] Admin notification sent successfully: ${info.messageId}`);
    return { success: true, mode: 'live', messageId: info.messageId };
  } catch (err) {
    console.error('[EmailService] Error sending admin email notification:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Send automated welcome & thank-you email to the client
 */
export async function sendClientWelcomeEmail({ fullName, email, subject }) {
  const transporter = createTransporter();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
        .header { background: #090a0d; color: #ffffff; padding: 35px 30px; text-align: center; }
        .header h1 { margin: 0 0 10px 0; font-size: 24px; font-weight: 800; letter-spacing: 0.02em; }
        .header p { margin: 0; color: #94a3b8; font-size: 14px; }
        .content { padding: 35px 30px; line-height: 1.7; font-size: 15px; color: #334155; }
        .content h2 { color: #0f172a; font-size: 18px; margin-top: 0; }
        .quote-box { background: #f1f5f9; border-left: 4px solid #090a0d; padding: 14px 18px; border-radius: 6px; margin: 20px 0; font-style: italic; color: #475569; }
        .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
        .signature-name { font-weight: 700; color: #0f172a; font-size: 16px; margin: 0; }
        .signature-title { color: #64748b; font-size: 13px; margin: 2px 0 0 0; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SUNNY KUMAR</h1>
          <p>Creative Developer &amp; UI/UX Designer</p>
        </div>
        <div class="content">
          <h2>Hello ${fullName},</h2>
          <p>Thank you for visiting my portfolio and taking the time to reach out! I am thrilled to hear from you regarding your website project.</p>
          <div class="quote-box">
            "<strong>${subject}</strong>"
          </div>
          <p>I have safely received your inquiry and project details. Whether you're looking for a custom full-stack web application, high-converting e-commerce store, or intuitive UI/UX design, I'm excited to help bring your vision to reality.</p>
          <p>I will carefully review your requirements and follow up with you within <strong>24 hours</strong> with next steps, project scope insights, and availability.</p>
          <p>If you have any additional project assets, design references, or timeline preferences, feel free to reply directly to this email.</p>
          
          <div class="signature">
            <p class="signature-name">Sunny Kumar</p>
            <p class="signature-title">Full-Stack Developer &amp; UI/UX Designer</p>
            <p class="signature-title"><a href="mailto:sunnykumar6207058974@gmail.com" style="color: #6366f1;">sunnykumar6207058974@gmail.com</a></p>
          </div>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Sunny Kumar &bull; California, USA &bull; Thank you for visiting!
        </div>
      </div>
    </body>
    </html>
  `;

  if (!transporter) {
    console.log(`[EmailService] (Demo Mode) Welcome email for client:
      To: ${email}
      Subject: Thank you for reaching out, ${fullName}! — Sunny Kumar
      Message: Automated welcome message dispatched`);
    return { success: true, mode: 'demo', recipient: email };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Sunny Kumar" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${fullName}! — Sunny Kumar`,
      html: htmlContent
    });
    console.log(`[EmailService] Welcome email sent to client ${email}: ${info.messageId}`);
    return { success: true, mode: 'live', messageId: info.messageId };
  } catch (err) {
    console.error(`[EmailService] Error sending welcome email to ${email}:`, err);
    return { success: false, error: err.message };
  }
}
