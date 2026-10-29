import { Router } from 'express';
import {
   getServicesController,
   getServiceByIdController,
   addServiceController,
   updateServiceController,
   deleteServiceController
} from '../controllers/services.controller.js';

const router = Router();

router.get('/', getServicesController);
router.get('/:sid', getServiceByIdController);
router.post('/', addServiceController);
router.put('/:sid', updateServiceController);
router.delete('/:sid', deleteServiceController);

export default router;