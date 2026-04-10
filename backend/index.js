import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import authRouter from './route/authRoute.js';
dotenv.config();
import cors from 'cors';
import userRouter from './route/userRoute.js';
import courseRouter from './route/courseRoute.js';
import paymentRouter from './route/paymentRoute.js';
import reviewRouter from './route/reviewRoute.js';


const port = process.env.PORT || 8000;
const app = express();

app.use(express.json()); //Middleware to parse JSON bodies
app.use(cookieParser()); //Middleware to parse cookies

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials:true
}))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/course", courseRouter)
app.use("/api/order", paymentRouter)
app.use("/api/review", reviewRouter)

app.get("/",(req,res)=> {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb()
});