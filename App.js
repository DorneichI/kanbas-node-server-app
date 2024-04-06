import express from 'express';
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import CourseRoutes from './Kanbas/courses/routes.js';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
  
const mongoURL1 = "mongodb+srv://<username>:<password>@kanbas.uvkddez.mongodb.net/?retryWrites=true&w=majority&appName=kanbas";
const mongoURL2 = "mongodb+srv://<username>:<password>@kanbas.uvkddez.mongodb.net/"
  
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app)
Hello(app); 
Lab5(app);
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);