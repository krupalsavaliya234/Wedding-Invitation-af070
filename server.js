import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Rsvp from './models/Rsvp.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

// Routes

// Submit RSVP
app.post('/api/rsvp', async (req, res) => {
    try {
        const { name, email, phone, numberOfGuests, attendance, message } = req.body;

        // Validation
        if (!name || !email || !phone || !attendance) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Create new RSVP
        const rsvp = new Rsvp({
            name,
            email,
            phone,
            numberOfGuests: attendance === 'yes' ? numberOfGuests : 0,
            attendance,
            message: message || ''
        });

        await rsvp.save();

        res.status(201).json({
            success: true,
            message: 'RSVP submitted successfully',
            data: rsvp
        });
    } catch (error) {
        console.error('Error submitting RSVP:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit RSVP. Please try again.'
        });
    }
});

// Get all RSVPs (for admin view)
app.get('/api/rsvp', async (req, res) => {
    try {
        const rsvps = await Rsvp.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: rsvps.length,
            data: rsvps
        });
    } catch (error) {
        console.error('Error fetching RSVPs:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch RSVPs'
        });
    }
});

// Get RSVP statistics
app.get('/api/rsvp/stats', async (req, res) => {
    try {
        const totalRsvps = await Rsvp.countDocuments();
        const attending = await Rsvp.countDocuments({ attendance: 'yes' });
        const notAttending = await Rsvp.countDocuments({ attendance: 'no' });

        const attendingGuests = await Rsvp.aggregate([
            { $match: { attendance: 'yes' } },
            { $group: { _id: null, total: { $sum: '$numberOfGuests' } } }
        ]);

        res.status(200).json({
            success: true,
            stats: {
                totalRsvps,
                attending,
                notAttending,
                totalGuests: attendingGuests[0]?.total || 0
            }
        });
    } catch (error) {
        console.error('Error fetching RSVP stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics'
        });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
