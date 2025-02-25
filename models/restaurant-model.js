import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});


const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    menu: [
        menuItemSchema
    ]
},
{
    timestamps: true
});

export default mongoose.model('Restaurant', restaurantSchema);