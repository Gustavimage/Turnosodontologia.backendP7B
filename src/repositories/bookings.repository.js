import { bookingsDao } from '../dao/bookings.dao.js';

export const getAllBookingsRepo = async () => {
    return await bookingsDao.getAll();
};

export const getBookingByIdRepo = async (id) => {
    return await bookingsDao.getById(id);
};

export const createBookingRepo = async (data) => {
    return await bookingsDao.create(data);
};

export const updateBookingRepo = async (id, data) => {
    return await bookingsDao.update(id, data);
};

export const getNextBookingIdRepo = async () => {
    const all = await bookingsDao.getAll();
    return all.length + 1;
};