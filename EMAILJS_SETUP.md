# 📧 EmailJS Setup Guide - Complete Instructions

I've implemented EmailJS in your portfolio! Follow these steps to start receiving emails at **andreolumide@gmail.com**.

## 🚀 Step 1: Install EmailJS Package

```bash
npm install @emailjs/browser
```

## 📝 Step 2: Create EmailJS Account

1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Sign up** with your email (can use any email, not necessarily andreolumide@gmail.com)
3. **Verify your account**

## ⚙️ Step 3: Configure EmailJS Dashboard

### A. Add Email Service
1. **Go to "Email Services"** in your EmailJS dashboard
2. **Click "Add New Service"**
3. **Select "Gmail"**
4. **Connect your Gmail account** (andreolumide@gmail.com)
5. **Note the Service ID** (something like `service_xxxxxxx`)

### B. Create Email Template
1. **Go to "Email Templates"**
2. **Click "Create New Template"**
3. **Use this template:**

```
Subject: 📧 New Contact from {{from_name}} - {{subject}}

Hello Olumide,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

4. **Save the template**
5. **Note the Template ID** (something like `template_xxxxxxx`)

### C. Get Public Key
1. **Go to "Account" → "General"**
2. **Find your Public Key** (something like `xxxxxxxxxxxxxxx`)

## 🔑 Step 4: Add Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

**Replace with your actual values from EmailJS dashboard!**

## 🎯 Step 5: Test the Contact Form

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Fill out the contact form on your portfolio**

3. **Submit the form**

4. **Check andreolumide@gmail.com for the email!**

## ✅ What Happens Now

**With EmailJS configured:**
- ✅ Real emails sent to andreolumide@gmail.com
- ✅ Professional email formatting
- ✅ Includes sender's name, email, subject, and message
- ✅ You can reply directly to the sender

**Without EmailJS configured:**
- ❌ Shows error message
- ✅ Opens email client as fallback
- ✅ User can still contact you manually

## 🔧 Template Variables Used

The email template uses these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (andreolumide@gmail.com)

## 📱 Example Email You'll Receive

```
Subject: 📧 New Contact from John Doe - Flutter App Development

Hello Olumide,

You have received a new message from your portfolio contact form:

From: John Doe
Email: john@example.com
Subject: Flutter App Development

Message:
Hi Olumide! I saw your portfolio and I'm interested in hiring you for a Flutter project. Can we schedule a call?

---
Reply directly to this email to respond to John Doe.

Best regards,
Your Portfolio Contact Form
```

## 🎉 Benefits

- **Free:** 200 emails/month on free plan
- **Reliable:** Professional email service
- **Direct replies:** You can reply directly to sender
- **No server needed:** Works client-side
- **Secure:** No API keys exposed

## 🆘 Troubleshooting

**If emails aren't working:**
1. Check console for errors
2. Verify all environment variables are correct
3. Make sure Gmail service is connected in EmailJS
4. Check spam folder
5. Verify template variables match the code

**Common issues:**
- Wrong Service ID or Template ID
- Gmail not properly connected
- Environment variables not loaded (restart server)

Once configured, you'll receive all contact form submissions directly in your Gmail! 📬✨