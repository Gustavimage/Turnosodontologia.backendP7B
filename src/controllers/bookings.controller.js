import { createBooking, getBookingById, addServiceToBooking } from "../services/bookings.service.js";

export const getBookingByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await getBookingById(id);

        if (!booking) {
            return res.status(404).json({ status: "error", message: "Reserva no encontrada" });
        }

        res.json({ status: "success", payload: booking });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const createBookingController = async (req, res) => {
    try {
        const result = await createBooking(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

export const addServiceToBookingController = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { serviceId } = req.body;

        const result = await addServiceToBooking(bookingId, serviceId);

        if (result.status === "error") {
            return res.status(400).json(result);
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};