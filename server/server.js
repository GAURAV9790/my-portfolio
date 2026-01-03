const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Detect Vercel serverless environment
const isVercel = !!process.env.VERCEL;

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

// Create a test account with Ethereal Email
let transporter;

const createTestAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  
  // Create reusable transporter object using the default SMTP transport
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  console.log('Test account created:');
  console.log('Email:', testAccount.user);
  console.log('Password:', testAccount.pass);
  console.log('Web interface: https://ethereal.email/login');

  return testAccount;
};

// Initialize test account
createTestAccount().catch(console.error);

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
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Wait for the transporter to be initialized
  if (!transporter) {
    return res.status(500).json({ error: 'Email service not ready. Please try again in a moment.' });
  }

  try {
    // Send email to yourself
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: email, // This will be replaced by Ethereal
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    // Send thank you email to the sender
    const thankYouMail = {
      from: '"Gaurav Oli" <noreply@example.com>',
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
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
    
    res.status(200).json({ 
      message: 'Email sent successfully',
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Send a more informative message back to the client
    const errorMessage = error && error.message
      ? `Mail error: ${error.message}`
      : 'Failed to send email due to an unknown server error.';

    res.status(500).json({ 
      error: errorMessage,
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Serve static files from the Vite build when running a standalone Node server
if (process.env.NODE_ENV === 'production' && !isVercel) {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Handle SPA (Single Page Application) - serve index.html for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// When not running on Vercel, start the HTTP server normally
let server;
if (!isVercel) {
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  // Handle unhandled promise rejections only for long-running Node server
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    server.close(() => process.exit(1));
  });
}

// Always export the app so it can be used by Vercel serverless functions
module.exports = app;
