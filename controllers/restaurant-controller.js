import Restaurant from '../models/restaurant-model.js';

const createRestaurant = async (req, res) => {
    try {
        const { name, location, cuisine, rating, menu } = req.body;
        const newRestaurant = new Restaurant({
            name,
            location,
            cuisine,
            rating,
            menu
        });
        await newRestaurant.save();
        return res.status(201).json(newRestaurant);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

const getRestaurant = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        return res.status(200).json(restaurants);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

const getRestaurantById = async (req, res) => {
    try {
        const restaurants = await Restaurant.findById(req.params.id);
        if (!restaurants) {
            return res.status(404).json({ message: 'Restaurant not found.' });
        }
        return res.status(200).json(restaurants);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found.' });
        }
        return res.json(updatedRestaurant);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!deletedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found.' });
        }
        return res.json({ message: 'Restaurant deleted.'})
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};

export { createRestaurant, getRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant };