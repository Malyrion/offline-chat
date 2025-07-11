import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { healthCheckHandler } from './utils';

const app = express();
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Ceche-Control'],
    }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/helath", healthCheckHandler)


export default app;