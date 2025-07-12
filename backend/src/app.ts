import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { healthCheckHandler, responseHandler } from './utils';
import { saveUserDetailsRequest } from './users/Controller';
import { saveUserService } from './users/Service';
import { saveUserDetails } from './users/useCase/saveUserDetails';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Cache-Control'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/helath", healthCheckHandler)

//Users

app.post("/users", saveUserDetailsRequest(saveUserService, responseHandler, saveUserDetails));


export default app;