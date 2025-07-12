import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { healthCheckHandler, responseHandler } from './utils';
import { saveUserDetailsRequest } from './users/Controller';
import { saveUserService } from './users/Service';
import { saveUserDetails } from './users/useCase/';

import { saveGroupDetailsRequest, getGroupsDetailsRequest } from './groups/Controller';
import { saveGroupService,getGroupsService } from './groups/Service';
import { saveGroupDetails,getGroupsDetails } from './groups/useCase';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Cache-Control'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/health", healthCheckHandler)

//Users
app.post("/users", saveUserDetailsRequest(saveUserService, responseHandler, saveUserDetails));


//Groups
app.post("/groups", saveGroupDetailsRequest(saveGroupService, responseHandler, saveGroupDetails));
app.get("/groups", getGroupsDetailsRequest(getGroupsService, responseHandler, getGroupsDetails));

export default app;