// index.js
import express from 'express';
import connectDB from './db.js';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
