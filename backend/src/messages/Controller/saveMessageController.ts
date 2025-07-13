import { ResponseHandler } from "../../utils";
import { SaveMessageDetailsType, saveMessageRequest, SaveMessageService } from "../Domain";
import { Request,Response } from "express";
import { get } from 'lodash';

type UseCase = (attributes: SaveMessageDetailsType) => Promise<void>;


export const saveMessageDetailsRequest = (saveMessageService: SaveMessageService
, responseHandler: ResponseHandler, useCase: UseCase)=>
    (request: Request, response: Response): void => {
    const groupId = get(request,'params.groupId', '');

    const sanitizedParameters ={
        user_id: request.body.userId,
        group_id: groupId,
        content: request.body.userId,
        message_time: new Date(request.body.messageTime),
    }

    const parameters: saveMessageRequest = sanitizedParameters

    void useCase({
        saveMessageService,
        parameters,
        responseHandler: responseHandler(response)
    })
}