# 🚀 Netlify Auto-Deployment - Quick Reference

## ✅ What's Already Configured

Your project is **100% ready** for Netlify deployment with:

- ✅ `netlify.toml` - Build configuration
- ✅ `_redirects` - SPA routing support  
- ✅ Security headers
- ✅ Asset caching
- ✅ Environment variable hints
- ✅ Deploy to Netlify button in README

---

## 🎯 3-Step Deployment

### Step 1: Connect to Netlify

**Option A: One-Click Deploy**
1. Click the "Deploy to Netlify" button in README.md
2. Authorize GitHub access
3. Click "Connect to GitHub"

**Option B: Manual Import**
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select: `krupalsavaliya234/Wedding-Invitation`

### Step 2: Add MongoDB Connection

**CRITICAL - Site won't work without this!**

1. In Netlify dashboard: **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add:
   ```
   Key: MONGODB_URI
   Value: mongodb+srv://username:password@cluster.mongodb.net/wedding?retryWrites=true&w=majority
   ```
4. Click **"Save"**
5. **Trigger deploy**: Deploys → Trigger deploy → Deploy site

### Step 3: Enable Auto-Deploy

**Already enabled by default!**

Verify in: **Site Settings** → **Build & deploy** → **Continuous Deployment**

- Production branch: `main` ✅
- Auto publishing: Enabled ✅

---

## 🔄 How It Works

```
┌─────────────────────────────────────────────┐
│  1. You push code to GitHub                │
│     git push origin main                    │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  2. Netlify detects the push                │
│     (via GitHub webhook)                    │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  3. Netlify runs build                      │
│     npm install                             │
│     npm run build                           │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  4. Deploy to CDN                           │
│     dist/ folder → Global CDN               │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  5. ✅ Live in ~2-3 minutes!                │
│     https://your-site.netlify.app           │
└─────────────────────────────────────────────┘
```

---

## 📋 Environment Variables Checklist

### Required
- [ ] `MONGODB_URI` - MongoDB Atlas connection string

### Optional
- [ ] `NODE_ENV` - Set to `production`
- [ ] `VITE_API_URL` - If using separate backend

### How to Get MongoDB URI

1. Login to https://cloud.mongodb.com/
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string
5. Replace `<password>` with your database password
6. Example:
   ```
   mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/wedding?retryWrites=true&w=majority
   ```

---

## 🎨 Customization Before First Deploy

### Must Update
- [ ] Couple names in `EntryScreen.jsx` and `MainInvitation.jsx`
- [ ] Wedding date in `MainInvitation.jsx` (line 14)
- [ ] Venue details in `VenueSection.jsx`

### Should Update
- [ ] Upload wedding photos to `public/photos/`
- [ ] Add background music: `public/wedding-music.mp3`
- [ ] Update WhatsApp share message in `WhatsAppShare.jsx`

### Optional
- [ ] Add app icons: `public/icon-192.png` and `public/icon-512.png`
- [ ] Customize Google Maps URL in `VenueSection.jsx`
- [ ] Update events timeline dates

---

## 🔍 Monitoring Your Deployment

### Build Logs
1. Go to **Deploys** tab in Netlify
2. Click on latest deploy
3. View **Deploy log** for build output

### Common Build Errors

**Error**: `Module not found`
```bash
# Fix: Missing dependency
npm install <package-name>
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

**Error**: `Build failed`
```bash
# Fix: Check Node version
# Ensure netlify.toml has: NODE_VERSION = "20"
```

**Error**: `Environment variable not found`
```bash
# Fix: Add MONGODB_URI in Netlify dashboard
# Then trigger new deploy
```

---

## 📱 Testing Your Deployed Site

### Checklist
- [ ] Entry screen loads with animation
- [ ] Music toggle works
- [ ] Countdown timer updates
- [ ] Events timeline displays correctly
- [ ] Photo gallery loads (with lazy loading)
- [ ] Lightbox opens/closes
- [ ] Google Maps loads
- [ ] RSVP form submits successfully
- [ ] Confetti animation plays
- [ ] Thank you popup appears
- [ ] WhatsApp share button works (mobile only)
- [ ] FAB menu opens (mobile only)
- [ ] QR code displays in footer

### Test on Multiple Devices
- [ ] Desktop browser (Chrome, Firefox, Safari)
- [ ] Mobile browser (iOS Safari, Android Chrome)
- [ ] Tablet
- [ ] Test PWA "Add to Home Screen"

---

## 🎯 Post-Deployment Tasks

### 1. Custom Domain (Optional)
1. Go to **Domain settings** in Netlify
2. Click **"Add custom domain"**
3. Follow DNS configuration steps
4. Example: `wedding.yourdomain.com`

### 2. Enable HTTPS
- ✅ Automatically enabled by Netlify
- Certificate provisioned within minutes

### 3. Share Your Invitation

**Get Your URL**:
- Netlify gives you: `https://your-site-name.netlify.app`
- Or use custom domain

**Share via**:
- WhatsApp (use the share button on site)
- Email
- Social media
- QR code on printed cards

### 4. Monitor RSVPs

**View in MongoDB Atlas**:
1. Login to https://cloud.mongodb.com/
2. Click **"Browse Collections"**
3. Select `rsvps` collection
4. View all submissions

**API Endpoints**:
```bash
# Get all RSVPs
curl https://your-site.netlify.app/api/rsvp

# Get statistics
curl https://your-site.netlify.app/api/rsvp/stats
```

---

## 🚨 Important Notes

### Security
- ✅ Never commit `.env` file to GitHub
- ✅ Always use environment variables for secrets
- ✅ MongoDB connection string is safe in Netlify env vars
- ✅ Security headers are configured in `netlify.toml`

### Performance
- ✅ Images use lazy loading
- ✅ Static assets cached for 1 year
- ✅ CDN distribution worldwide
- ✅ Automatic HTTPS

### Maintenance
- ✅ Auto-deploy on every push to `main`
- ✅ Rollback available in Netlify dashboard
- ✅ Deploy previews for pull requests
- ✅ Build notifications via email

---

## 📞 Support

### Issues?

**Build Fails**:
- Check Netlify deploy logs
- Verify `netlify.toml` configuration
- Ensure all dependencies in `package.json`

**RSVP Not Working**:
- Verify `MONGODB_URI` in Netlify env vars
- Check MongoDB Atlas network access
- Test API endpoint directly

**Need Help**:
- Netlify Docs: https://docs.netlify.com/
- MongoDB Docs: https://docs.atlas.mongodb.com/
- GitHub Issues: Create issue in repository

---

## ✅ Success Checklist

Before sharing with guests:

- [ ] Site deployed successfully
- [ ] MongoDB connected
- [ ] RSVP form tested and working
- [ ] All wedding details updated
- [ ] Photos uploaded
- [ ] Music added
- [ ] Tested on mobile device
- [ ] WhatsApp share tested
- [ ] QR code generated
- [ ] Custom domain configured (optional)

---

**🎉 You're all set! Your wedding invitation is live and auto-deploying!**

Every time you push changes to GitHub, Netlify will automatically rebuild and deploy your site in 2-3 minutes.

**Repository**: https://github.com/krupalsavaliya234/Wedding-Invitation
**Netlify Dashboard**: https://app.netlify.com/

---

*Made with ❤️ for your special day!*
