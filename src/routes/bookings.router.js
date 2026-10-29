import { Router } from 'express';
import {
    createBookingController,
    getBookingByIdController,
    addServiceToBookingController
} from '../controllers/bookings.controller.js';

const router = Router();

router.post('/', createBookingController);
router.get('/:bid', getBookingByIdController);
router.post('/:bid/services', addServiceToBookingController);

export default router;