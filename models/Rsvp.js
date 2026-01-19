import mongoose from 'mongoose';

const rsvpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    numberOfGuests: {
        type: Number,
        default: 1,
        min: 0,
        max: 10
    },
    attendance: {
        type: String,
        required: true,
        enum: ['yes', 'no']
    },
    message: {
        type: String,
        trim: true,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

export default Rsvp;
