import { ResponseHandler } from "../../utils";
import { SaveUserDetailsType, saveUserRequest, SaveUserService } from "../Domain";
import { Request,Response } from "express";

type UseCase = (attributes: SaveUserDetailsType) => Promise<void>;

export const saveUserDetailsRequest = (saveUserService:SaveUserService, responseHandler: ResponseHandler, useCase: UseCase)=>
    (request: Request, response: Response): void => {

    const sanitizedParameters ={
        username: request.body.username
    }

    const parameters: saveUserRequest = sanitizedParameters

    void useCase({
        saveUserService,
        parameters,
        responseHandler: responseHandler(response)
    })
}