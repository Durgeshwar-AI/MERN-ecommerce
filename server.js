import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './Config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';

dotenv.config();

connectDB();

//rest object
const app=express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send("<h1>Welcom to the ecommerce app</h1>")
})

const PORT= process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})