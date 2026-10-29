import { Router } from 'express';
import { ViewsController } from '../controllers/views.controller.js';

const router = Router();
const viewsController = new ViewsController();

router.get('/views/services', viewsController.renderServices);
router.get('/views/bookings', viewsController.renderBookings);

export default router;