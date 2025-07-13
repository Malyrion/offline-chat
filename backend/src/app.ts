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
import { saveGroupMemberService } from './members/Service';
import { saveGroupMemberDetailsRequest } from './members/Controller';
import { saveGroupMemberDetails } from './members/useCase';
import { getGroupMessagesDetailsRequest, saveMessageDetailsRequest } from './messages/Controller';
import { getGroupMessagesService, saveMessageService } from './messages/Service';
import { getGroupMessagesDetails, saveMessageDetails } from './messages/useCase';

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
app.post("/groups", saveGroupDetailsRequest({saveGroupService,saveGroupMemberService}, responseHandler, saveGroupDetails));
app.get("/groups", getGroupsDetailsRequest(getGroupsService, responseHandler, getGroupsDetails));
app.post("/groups/:groupId", saveGroupMemberDetailsRequest(saveGroupMemberService, responseHandler, saveGroupMemberDetails));

//Messages
app.post("/groups/:groupId/messages", saveMessageDetailsRequest(saveMessageService, responseHandler, saveMessageDetails));
app.get("/groups/:groupId/messages", getGroupMessagesDetailsRequest(getGroupMessagesService, responseHandler, getGroupMessagesDetails));


export default app;