const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Add your frontend URL
  methods: ['GET', 'POST'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Create a test account (for development only)
const createTestAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  return {
    user: testAccount.user,
    pass: testAccount.pass
  };
};

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Verify connection configuration
transporter.verify((error) => {
  if (error) {
    console.error('Error with mail configuration:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
    to: 'gauravoli777@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    // Send the main email to you
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    // Send automatic thank you email to the sender
    const thankYouMail = {
      from: `"Gaurav Oli" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      text: `Dear ${name},

Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.

Best regards,
Gaurav Oli
Full Stack Developer`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Thank you for contacting me!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message for reference:</p>
          <div style="background-color: #F3F4F6; padding: 15px; border-left: 4px solid #4F46E5; margin: 15px 0;">
            <p style="margin: 0; white-space: pre-line;">${message}</p>
          </div>
          <p>Best regards,<br>
          <strong>Gaurav Oli</strong><br>
          Full Stack Developer</p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #6B7280;">This is an automated message. Please do not reply to this email.</p>
        </div>
      `
    };

    await transporter.sendMail(thankYouMail);
    console.log('Thank you email sent to:', email);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // Log full error on the server for debugging
    console.error('Error sending email:', error);
    if (error && error.response) {
      console.error('SMTP response:', error.response);
    }

    // Send a more informative message back to the client
    const message = error && error.message
      ? `Mail error: ${error.message}`
      : 'Failed to send email due to an unknown server error.';

    res.status(500).json({ error: message });
  }
});

// Serve static files from the Vite build
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Handle SPA (Single Page Application) - serve index.html for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});
