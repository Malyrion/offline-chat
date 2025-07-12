import { ResponseHandler } from "../../utils";
import { SaveGroupMemberDetailsType, saveGroupMemberRequest, SaveGroupMemberService } from "../Domain";
import { Request,Response } from "express";
import { get } from 'lodash';

type UseCase = (attributes: SaveGroupMemberDetailsType) => Promise<void>;

export const saveGroupMemberDetailsRequest = (saveGroupMemberService:SaveGroupMemberService, responseHandler: ResponseHandler, useCase: UseCase)=>
    (request: Request, response: Response): void => {
    const groupId = get(request,'params.groupId', '');

    const sanitizedParameters ={
        group_id: groupId,
        user_id: request.body.userId,
        join_date: new Date(request.body.joinDate) 
    }

    const parameters: saveGroupMemberRequest = sanitizedParameters

    void useCase({
        saveGroupMemberService,
        parameters,
        responseHandler: responseHandler(response)
    })
}