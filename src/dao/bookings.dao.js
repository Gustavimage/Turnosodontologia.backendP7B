import { BookingModel } from './models/booking.model.js';

export class BookingsDao {
    async getAll() {
        return await BookingModel.find().populate('services.service');
    }

    async getById(id) {
        return await BookingModel.findById(id).populate('services.service');
    }

    async create(data) {
        return await BookingModel.create(data);
    }

    async update(id, data) {
        return await BookingModel.findByIdAndUpdate(id, data, { new: true });
    }
}

export const bookingsDao = new BookingsDao();