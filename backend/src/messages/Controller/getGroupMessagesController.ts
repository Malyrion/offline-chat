import { ResponseHandler } from "../../utils";
import { GetGroupMessagesDetailsType, getGroupMessagesRequest, GetGroupMessagesService } from "../Domain";
import { Request,Response } from "express";
import { get } from 'lodash';

type UseCase = (attributes: GetGroupMessagesDetailsType) => Promise<void>;

export const getGroupMessagesDetailsRequest = (getGroupMessagesService:GetGroupMessagesService, responseHandler: ResponseHandler, useCase: UseCase)=>
    (request: Request, response: Response): void => {
    const groupId = get(request,'params.groupId', '');

    const sanitizedParameters ={
        group_id: groupId,
    }

    const parameters: getGroupMessagesRequest = sanitizedParameters

    void useCase({
        getGroupMessagesService,
        parameters,
        responseHandler: responseHandler(response)
    })
}