export const validateContact = (req, res, next) => {
  const { fullName, email, subject, message } = req.body;

  const errors = {};
  if (!fullName || !fullName.trim()) errors.fullName = 'Please enter your name.';
  if (!email || !email.trim()) {
    errors.email = 'Please provide an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!subject || !subject.trim()) errors.subject = 'Please enter a subject.';
  if (!message || !message.trim()) errors.message = 'Please write your message.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};
