# Indian Wedding Invitation

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/krupalsavaliya234/Wedding-Invitation)

A beautiful, mobile-first React wedding invitation with Traditional & Royal Indian theme.

## ✨ Features

### Phase 1-2: Core Experience
- 🎭 **Entry Screen** with welcome animation and "Open Invitation" button
- 🎨 **Traditional Indian Theme** - Maroon (#800000), Gold (#D4AF37), Cream (#FFFDD0)
- 📱 **Fully Responsive** design (mobile-first approach)
- ⏱️ **Live Countdown Timer** (2x2 mobile grid, 1x4 desktop)
- 📅 **Events Timeline** - Vertical on mobile, horizontal grid on desktop
- 🎵 **Background Music** toggle (fixed top-right)

### Phase 3: Gallery & Venue
- 📸 **Photo Gallery** - Masonry grid (2 cols mobile, 4 desktop)
- 🖼️ **Swipe-to-Close Lightbox** for mobile
- 🗺️ **Google Maps** integration with fixed height
- 📍 **Large "Get Directions"** button (thumb-friendly)

### Phase 4: Smart RSVP
- ✍️ **Floating Labels** to save vertical space
- 📱 **Numeric Keypad** for phone input (`inputMode="numeric"`)
- ✅ **Client-Side Validation** with error messages
- 🎊 **Confetti Animation** on successful submission
- 💌 **Thank You Popup** with auto-close
- 🗄️ **MongoDB Integration** for RSVP storage

### Phase 5: Sharing & PWA
- 💬 **WhatsApp Share Button** (fixed bottom-left on mobile)
- 📱 **Floating Action Button (FAB)** for mobile navigation
- 🔲 **QR Code Generator** in footer for printed cards
- 📲 **PWA Support** - "Add to Home Screen" capability
- 🚀 **Netlify Auto-Deployment** configured

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Fonts**: Playfair Display (headings), Poppins (body)
- **Styling**: Tailwind CSS with custom theme

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure MongoDB

1. Create a MongoDB Atlas account at https://cloud.mongodb.com/
2. Create a new cluster (free tier available)
3. Get your connection string
4. Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
```

### 3. Add Background Music (Optional)

Place your wedding music file (MP3 format) in the `public` folder and name it `wedding-music.mp3`.

### 4. Customize Wedding Details

Edit the following files to add your wedding details:

- `src/components/EntryScreen.jsx` - Update couple names
- `src/components/MainInvitation.jsx` - Update wedding date, venue, events timeline

### 5. Run the Application

**Option 1: Run both frontend and backend together**
```bash
npm run dev:all
```

**Option 2: Run separately**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
wedding-invitation/
├── public/
│   └── wedding-music.mp3          # Background music file
├── src/
│   ├── components/
│   │   ├── EntryScreen.jsx        # Welcome screen with animation
│   │   ├── MainInvitation.jsx     # Main invitation page
│   │   ├── RsvpForm.jsx           # RSVP form component
│   │   └── MusicToggle.jsx        # Music play/pause button
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles & Tailwind
├── models/
│   └── Rsvp.js                    # MongoDB RSVP schema
├── server.js                      # Express backend server
├── .env                           # Environment variables
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── package.json                   # Dependencies & scripts
```

## API Endpoints

- `POST /api/rsvp` - Submit RSVP
- `GET /api/rsvp` - Get all RSVPs (admin)
- `GET /api/rsvp/stats` - Get RSVP statistics
- `GET /api/health` - Health check

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  maroon: '#800000',
  gold: '#D4AF37',
  cream: '#FFFDD0',
}
```

### Fonts

The application uses:
- **Playfair Display** for headings (elegant serif)
- **Poppins** for body text (clean sans-serif)

Change fonts in `src/index.css` and `tailwind.config.js`.

## Responsive Breakpoints

- Mobile: < 768px (vertical timeline, stacked names, 2x2 countdown)
- Desktop: ≥ 768px (horizontal grid, side-by-side names, 1x4 countdown)


## 🚀 Quick Deploy to Netlify

### One-Click Deploy

Click the button above or follow these steps:

### Step 1: Connect GitHub to Netlify

1. **Login to Netlify**: Go to https://app.netlify.com/
2. **Import Project**: Click "Add new site" → "Import an existing project"
3. **Select GitHub**: Authorize Netlify to access your GitHub
4. **Choose Repository**: Select `krupalsavaliya234/Wedding-Invitation`

### Step 2: Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20 (set in netlify.toml)

Click **"Deploy site"**

### Step 3: Set Environment Variables

**CRITICAL**: Before the site works, add your MongoDB connection:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add the following:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `NODE_ENV` | `production` (optional) |

4. Click **"Save"**
5. Go to **Deploys** → **Trigger deploy** → **"Deploy site"**

### Step 4: Enable Auto-Deployment

Under **Site Settings** → **Build & deploy** → **Continuous Deployment**:

- ✅ **Production branch**: `main`
- ✅ **Auto publishing**: Enabled

**Now you're done!** Every push to GitHub will auto-deploy to Netlify.

---

## 🔄 How Auto-Deployment Works

```
You push code to GitHub
         ↓
Netlify detects the change
         ↓
Runs: npm run build
         ↓
Deploys to your live site
         ↓
✅ Site updated automatically!
```

**Deployment time**: ~2-3 minutes

---

## 📱 PWA Installation

Your guests can install the invitation as an app:

1. Open the website on mobile
2. Tap browser menu (⋮)
3. Select **"Add to Home Screen"**
4. App installs like a native app!

**Note**: Add app icons to `public/`:
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

---

## 🗄️ MongoDB Atlas Setup

### Quick Setup (5 minutes)

1. **Create Account**: https://cloud.mongodb.com/ (Free tier)
2. **Create Cluster**: 
   - Click "Build a Database"
   - Choose FREE (M0)
   - Select region
3. **Create User**:
   - Database Access → Add user
   - Set username/password
   - Grant "Read and write"
4. **Whitelist IP**:
   - Network Access → Add IP
   - Allow from anywhere: `0.0.0.0/0`
5. **Get Connection String**:
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Add to Netlify environment variables

---

## 🎨 Customization Guide

### Update Wedding Details

**Couple Names**:
```javascript
// src/components/EntryScreen.jsx (line 45)
// src/components/MainInvitation.jsx (line 60)
// src/components/Footer.jsx (line 40)
```

**Wedding Date**:
```javascript
// src/components/MainInvitation.jsx (line 14)
const weddingDate = new Date('2026-02-14T18:00:00');
```

**Venue & Map**:
```javascript
// src/components/VenueSection.jsx (lines 5-12)
```

**Photos**:
```javascript
// src/components/PhotoGallery.jsx (lines 8-15)
// Upload photos to public/photos/
```

**WhatsApp Message**:
```javascript
// src/components/WhatsAppShare.jsx (line 5)
```

---

## 📊 Monitor RSVPs

### View Submissions

**Option 1**: MongoDB Atlas Dashboard
- Login to https://cloud.mongodb.com/
- Browse Collections → `rsvps`

**Option 2**: API Endpoint
```bash
curl https://your-site.netlify.app/api/rsvp
```

### RSVP Statistics
```bash
curl https://your-site.netlify.app/api/rsvp/stats
```

Returns:
```json
{
  "totalRsvps": 50,
  "attending": 45,
  "notAttending": 5,
  "totalGuests": 120
}
```

---

## 🐛 Troubleshooting

### Build Fails

**Error**: "Module not found"
```bash
# Fix: Install missing dependencies
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### RSVP Not Saving

**Check**:
1. ✅ `MONGODB_URI` set in Netlify
2. ✅ MongoDB Atlas allows all IPs
3. ✅ Database user has write permissions

### Images Not Loading

**Fix**: Ensure images are in `public/` folder
```
public/
  ├── photos/
  │   ├── photo1.jpg
  │   └── photo2.jpg
  └── wedding-music.mp3
```

---

## 📖 Documentation

- **Full Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Feature Walkthrough**: See artifacts folder
- **Netlify Docs**: https://docs.netlify.com/

---

## License

MIT License - Feel free to use this for your wedding! 💑

## Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ for Priya & Raj's Wedding
