import { getAllServices } from '../services/services.service.js';
import { getAllBookings } from '../services/bookings.service.js';

export class ViewsController {

    renderServices = async (req, res) => {
        try {
            const services = await getAllServices();
            const servicesPlain = services.map(s => s.toObject ? s.toObject() : s);

            res.render('services', {
                title: 'Listado de Servicios',
                services: servicesPlain,
                style: 'styles.css'
            });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };

    renderBookings = async (req, res) => {
        try {
            const bookings = await getAllBookings();
            const bookingsPlain = bookings.map(b => b.toObject ? b.toObject() : b);

            res.render('bookings', {
                title: 'Gestión de Reservas',
                bookings: bookingsPlain,
                style: 'styles.css'
            });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    };
}