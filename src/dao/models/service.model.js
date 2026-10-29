import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
}, { timestamps: true });

export const ServiceModel = mongoose.model('services', serviceSchema);