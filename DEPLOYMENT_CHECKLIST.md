# 🚀 Deployment Checklist

Before deploying your portfolio, make sure everything is ready:

## ✅ **Content Ready:**
- [ ] Replace profile image (`/public/profile.jpg`) with your actual photo
- [ ] Replace resume PDF (`/public/Olumide-Andre-Resume.pdf`) with your actual resume
- [ ] Add your project screenshots:
  - [ ] `/public/social-bee-screenshot.jpeg`
  - [ ] `/public/sncfconnect.jpeg`
  - [ ] `/public/hollavox.jpg`
  - [ ] `/public/smatpay.jpeg`

## ✅ **EmailJS Configuration:**
- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Environment variables ready:
  - [ ] `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## ✅ **Testing:**
- [ ] Contact form works locally
- [ ] Resume download works
- [ ] All project images display
- [ ] Dark/light theme toggle works
- [ ] Mobile responsive design looks good

## 🚀 **Deployment Options:**

### **Option 1: Vercel (Recommended)**
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

**Pros:**
- ✅ Free
- ✅ Automatic deployments
- ✅ Perfect for Next.js
- ✅ Custom domains
- ✅ SSL certificates

### **Option 2: Netlify**
1. Build project: `npm run build`
2. Upload build folder to Netlify
3. Add environment variables

**Pros:**
- ✅ Free
- ✅ Easy drag-and-drop
- ✅ Form handling
- ✅ Custom domains

### **Option 3: GitHub Pages**
1. Enable static export in `next.config.js` ✅ (Already done)
2. Build and export: `npm run export`
3. Push to `gh-pages` branch

**Pros:**
- ✅ Free
- ✅ Integrated with GitHub
- ✅ Easy to manage

## 🌐 **Custom Domain (Optional):**
- Buy domain from Namecheap, GoDaddy, etc.
- Point DNS to your hosting provider
- Add domain in hosting dashboard

## 📱 **After Deployment:**
- [ ] Test contact form on live site
- [ ] Test resume download
- [ ] Check mobile responsiveness
- [ ] Test all project links
- [ ] Share with friends for feedback

## 🎯 **Your Live URLs:**
- **Vercel:** `https://portfolio-andreolumide.vercel.app`
- **Netlify:** `https://andreolumide-portfolio.netlify.app`
- **GitHub Pages:** `https://andrenot3000.github.io/portfolio`

Ready to go live! 🚀