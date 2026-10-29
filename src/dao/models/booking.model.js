import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    services: [
        {
            service: { type: mongoose.Schema.Types.ObjectId, ref: 'services' },
            quantity: { type: Number, default: 1 }
        }
    ],
    date: { type: String, required: true },
    status: { type: String, default: 'pendiente' }
}, { timestamps: true });

export const BookingModel = mongoose.model('bookings', bookingSchema);