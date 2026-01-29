# 📧 Email Setup Guide - Get Real Emails from Contact Form

Currently, the contact form only logs messages to the console. Here's how to receive actual emails at **andreolumide@gmail.com**:

## 🚀 Quick Setup with EmailJS (Recommended - FREE)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up with **andreolumide@gmail.com**
3. Verify your email

### Step 2: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 3: Configure EmailJS Service
1. **Add Gmail Service:**
   - In EmailJS dashboard → Email Services
   - Add Gmail service
   - Connect your **andreolumide@gmail.com** account

2. **Create Email Template:**
   - Go to Email Templates
   - Create new template with:
   ```
   Subject: New Contact from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Sent from Portfolio Contact Form
   ```

3. **Get Your Keys:**
   - Public Key (from Account settings)
   - Service ID (from Email Services)
   - Template ID (from Email Templates)

### Step 4: Update the Code

Create `.env.local` file:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

Update `app/api/contact/route.ts`:
```typescript
import emailjs from '@emailjs/browser'

// Add this to your API route
const result = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: 'andreolumide@gmail.com'
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```

## 🔧 Alternative: Simple Nodemailer Setup

### Step 1: Install Nodemailer
```bash
npm install nodemailer
npm install @types/nodemailer
```

### Step 2: Gmail App Password
1. Enable 2-factor authentication on **andreolumide@gmail.com**
2. Generate App Password for "Mail"
3. Use this password (not your regular Gmail password)

### Step 3: Environment Variables
```env
GMAIL_USER=andreolumide@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

### Step 4: Update API Route
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'andreolumide@gmail.com',
  subject: `Portfolio Contact: ${subject}`,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `
})
```

## ✅ Current Status

**Right now:**
- ❌ No actual emails sent to andreolumide@gmail.com
- ✅ Messages logged to console (check terminal)
- ✅ Form validation working
- ✅ User feedback working

**After setup:**
- ✅ Real emails sent to andreolumide@gmail.com
- ✅ Professional email formatting
- ✅ All contact form data included

## 🎯 Recommendation

**Use EmailJS** - it's:
- Free for up to 200 emails/month
- No server configuration needed
- Works with Gmail easily
- Professional and reliable

Once set up, you'll receive all contact form submissions directly in your Gmail inbox! 📬