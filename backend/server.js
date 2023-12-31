// import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import productRoutes from './routers/productRoutes.js';
import userRoutes from './routers/userRoutes.js';
import orderRoutes from './routers/orderRoutes.js'
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

//body parser middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/upload', uploadRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);