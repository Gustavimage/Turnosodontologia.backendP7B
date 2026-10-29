import {
    getAllBookingsRepo,
    getBookingByIdRepo,
    createBookingRepo,
    updateBookingRepo,
    getNextBookingIdRepo
} from '../repositories/bookings.repository.js';
import { getServiceById } from './services.service.js';

export const getAllBookings = async () => {
    return await getAllBookingsRepo();
};

export const getBookingById = async (id) => {
    return await getBookingByIdRepo(id);
};

export const createBooking = async (bookingData) => {
    const nextId = await getNextBookingIdRepo();

    const servicesWithQuantity = (bookingData.services || []).map(srv => ({
        ...srv,
        quantity: srv.quantity || 1
    }));

    const newBooking = {
        id: nextId,
        services: servicesWithQuantity,
        date: bookingData.date || new Date().toISOString(),
        status: "pending",
        ...bookingData
    };

    await createBookingRepo(newBooking);

    return {
        status: "success",
        payload: newBooking
    };
};

export const addServiceToBooking = async (bookingId, serviceId) => {
    const service = await getServiceById(serviceId);
    if (!service) {
        return {
            status: "error",
            message: "El servicio no existe"
        };
    }

    const booking = await getBookingByIdRepo(bookingId);
    if (!booking) {
        return {
            status: "error",
            message: "No se encuentra la reserva"
        };
    }

    if (!booking.services) {
        booking.services = [];
    }

    const existingServiceIndex = booking.services.findIndex(
        (s) => (s.service?._id?.toString() || s.service?.toString()) === serviceId.toString()
    );

    if (existingServiceIndex !== -1) {
        booking.services[existingServiceIndex].quantity =
            (booking.services[existingServiceIndex].quantity || 1) + 1;
    } else {
        booking.services.push({
            service: serviceId,
            quantity: 1
        });
    }

    await updateBookingRepo(bookingId, booking);

    return {
        status: "success",
        payload: booking
    };
};