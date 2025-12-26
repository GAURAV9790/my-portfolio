import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    const thankYouMail = {
      from: `"Gaurav Oli" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
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
      `,
    };

    await transporter.sendMail(thankYouMail);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email (Vercel):', error);
    const msg = error && error.message ? `Mail error: ${error.message}` : 'Failed to send email.';
    return res.status(500).json({ error: msg });
  }
};
