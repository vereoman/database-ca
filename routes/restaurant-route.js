import express from 'express';
import { createRestaurant, getRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant } from '../controllers/restaurant-controller.js';

const router = express.Router();

router.post('/restaurant', createRestaurant);
router.get('/restaurant', getRestaurant);
router.get('/restaurant/:id', getRestaurantById);
router.put('/restaurant/:id', updateRestaurant);
router.delete('/restaurant/:id', deleteRestaurant);

export default router;