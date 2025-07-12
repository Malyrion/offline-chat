import { ResponseHandler } from "../../utils";
import { GetGroupsDetailsType, getGroupsRequest, GetGroupsService } from "../Domain";
import { Request,Response } from "express";

type UseCase = (attributes: GetGroupsDetailsType) => Promise<void>;

export const getGroupsDetailsRequest = (getGroupsService:GetGroupsService, responseHandler: ResponseHandler, useCase: UseCase)=>
    (request: Request, response: Response): void => {

    const sanitizedParameters ={
        userId: request.body.userId,
    }

    const parameters: getGroupsRequest = sanitizedParameters

    void useCase({
        getGroupsService,
        parameters,
        responseHandler: responseHandler(response)
    })
}