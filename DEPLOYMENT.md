# Deployment Guide - Indian Wedding Invitation

## 📦 Repository Information

**GitHub Repository**: https://github.com/krupalsavaliya234/Wedding-Invitation

---

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git push -u origin main
   ```

2. **Go to Netlify**:
   - Visit https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository: `krupalsavaliya234/Wedding-Invitation`

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Add Environment Variables**:
   - Go to Site settings → Environment variables
   - Add: `MONGODB_URI` = your MongoDB Atlas connection string
   - Add: `PORT` = 5000

5. **Enable Functions** (for backend):
   - Go to Site settings → Functions
   - Functions directory: `netlify/functions`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

---

## 🔧 Backend Deployment

Since this app has a Node.js backend, you have two options:

### Option A: Deploy Backend Separately

**Deploy to Render/Railway/Heroku:**

1. Create a new web service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variable: `MONGODB_URI`
6. Deploy

**Update Frontend:**
- In `vite.config.js`, update proxy target to your backend URL:
  ```javascript
  proxy: {
    '/api': {
      target: 'https://your-backend-url.com',
      changeOrigin: true,
    },
  }
  ```

### Option B: Use Netlify Functions

Convert `server.js` to serverless functions (recommended for Netlify):

1. Create `netlify/functions/rsvp.js`:
   ```javascript
   const mongoose = require('mongoose');
   // ... your RSVP logic here
   ```

2. Update frontend API calls to use `/.netlify/functions/rsvp`

---

## 🗄️ MongoDB Atlas Setup

1. **Create Account**:
   - Go to https://cloud.mongodb.com/
   - Sign up for free

2. **Create Cluster**:
   - Click "Build a Database"
   - Choose "FREE" tier (M0)
   - Select region closest to your users
   - Click "Create"

3. **Create Database User**:
   - Go to Database Access
   - Add new database user
   - Set username and password
   - Grant "Read and write to any database"

4. **Whitelist IP**:
   - Go to Network Access
   - Add IP Address
   - Choose "Allow access from anywhere" (0.0.0.0/0)

5. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Add to `.env` file and Netlify environment variables

---

## 📱 PWA Setup

The app is already configured as a PWA! Users can:

1. Open the website on mobile
2. Tap browser menu (⋮)
3. Select "Add to Home Screen"
4. App will install like a native app

**Note**: You need to add app icons:
- Create 192x192px icon → save as `public/icon-192.png`
- Create 512x512px icon → save as `public/icon-512.png`

---

## 🎨 Customization Before Deployment

### 1. Update Wedding Details

**Couple Names**:
- `src/components/EntryScreen.jsx` (line 45-49)
- `src/components/MainInvitation.jsx` (line 60-67)
- `src/components/Footer.jsx` (line 40)

**Wedding Date**:
- `src/components/MainInvitation.jsx` (line 14) - Update countdown date

**Venue**:
- `src/components/VenueSection.jsx` (lines 5-12)

**Events Timeline**:
- `src/components/MainInvitation.jsx` (lines 182-250 for mobile, 254-318 for desktop)

### 2. Add Photos

Replace placeholder images in `src/components/PhotoGallery.jsx` (lines 8-15):
```javascript
const photos = [
  { id: 1, url: '/photos/photo1.jpg', alt: 'Your description' },
  // ... add your photos
];
```

Upload photos to `public/photos/` folder.

### 3. Add Background Music

- Get your wedding song (MP3 format)
- Save as `public/wedding-music.mp3`
- Music toggle will work automatically

### 4. Update WhatsApp Share Message

Edit `src/components/WhatsAppShare.jsx` (line 5):
```javascript
const message = `Your custom invitation message here`;
```

### 5. Update QR Code URL

The QR code automatically uses your deployed URL. No changes needed!

---

## ✅ Pre-Deployment Checklist

- [ ] Updated couple names
- [ ] Set wedding date for countdown
- [ ] Added venue details and Google Maps URL
- [ ] Uploaded wedding photos
- [ ] Added background music file
- [ ] Created MongoDB Atlas database
- [ ] Added MONGODB_URI to environment variables
- [ ] Created app icons (192x192 and 512x512)
- [ ] Tested on mobile device
- [ ] Tested RSVP form submission
- [ ] Verified all links work

---

## 🔗 After Deployment

### Share Your Invitation

1. **Get Your URL**: 
   - Netlify will give you a URL like: `https://your-site-name.netlify.app`
   - You can customize it in Site settings → Domain management

2. **Share via WhatsApp**:
   - Use the WhatsApp share button on the site
   - Or manually share the URL

3. **Print QR Code**:
   - Take a screenshot of the QR code from the footer
   - Add to your physical invitation cards
   - Guests can scan to open the website

### Monitor RSVPs

Access your MongoDB Atlas dashboard to view all RSVPs:
1. Go to https://cloud.mongodb.com/
2. Click "Browse Collections"
3. View `rsvps` collection

Or create an admin page to view RSVPs (optional).

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Error**: "Module not found"
- **Fix**: Make sure all dependencies are in `package.json`
- Run: `npm install` locally and commit `package-lock.json`

**Error**: "Command failed with exit code 1"
- **Fix**: Check Node version compatibility
- Add to `netlify.toml`:
  ```toml
  [build.environment]
    NODE_VERSION = "20"
  ```

### RSVP Not Saving

**Issue**: Form submits but data not in MongoDB
- **Fix**: Check `MONGODB_URI` environment variable in Netlify
- Verify MongoDB Atlas network access allows all IPs
- Check browser console for errors

### Images Not Loading

**Issue**: Photos show broken links
- **Fix**: Make sure images are in `public/` folder
- Use absolute paths: `/photos/image.jpg`
- Rebuild and redeploy

### WhatsApp Share Not Working

**Issue**: Share button doesn't open WhatsApp
- **Fix**: Test on actual mobile device (doesn't work in desktop browser)
- Make sure URL is properly encoded

---

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

---

## 🎉 You're All Set!

Your wedding invitation is now live and ready to share with guests!

**Repository**: https://github.com/krupalsavaliya234/Wedding-Invitation

**Need Help?**
- Check Netlify docs: https://docs.netlify.com/
- MongoDB Atlas docs: https://docs.atlas.mongodb.com/
- Create an issue on GitHub

---

**Made with ❤️ for your special day!**
