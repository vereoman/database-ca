import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import restaurantRouter from

dotenv.config();
const app = express();

app.use(express.json());
app.use('/', restaurantRouter);

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await connectDB();
        console.log(`Server is running on PORT ${PORT}.`);
    } catch (error) {
        console.error('Failed to start server.');
    }
};

startServer();