import express from 'express';
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import CourseRoutes from './Kanbas/courses/routes.js';
const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app)
Hello(app); 
Lab5(app);
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);