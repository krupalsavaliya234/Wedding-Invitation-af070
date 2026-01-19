# Indian Wedding Invitation

A beautiful, responsive React-based wedding invitation website with Traditional & Royal Indian theme.

## Features

- ✨ **Entry Screen** with welcome animation and "Open Invitation" button
- 🎨 **Traditional Indian Theme** with Maroon (#800000), Gold (#D4AF37), and Cream (#FFFDD0) colors
- 📱 **Fully Responsive** design
  - Vertical timeline on mobile, horizontal grid on desktop
  - Stacked couple names on mobile, side-by-side on desktop
  - 2x2 countdown grid on mobile, 1x4 on desktop
- ⏱️ **Live Countdown Timer** to the wedding day
- 📝 **RSVP Form** with MongoDB backend
- 🎵 **Background Music** toggle (Play/Pause)
- 🕉️ **Mandala Patterns** and traditional Indian design elements
- 💌 **Wedding Events Timeline** (Haldi, Mehendi, Sangeet, Wedding, Reception)

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

## Deployment

### Frontend (Vercel/Netlify)

1. Build the frontend:
```bash
npm run build
```

2. Deploy the `dist` folder to Vercel or Netlify

### Backend (Heroku/Railway/Render)

1. Ensure `server.js` is in the root directory
2. Set environment variables (MONGODB_URI, PORT)
3. Deploy to your preferred platform

## License

MIT License - Feel free to use this for your wedding! 💑

## Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ for Priya & Raj's Wedding
