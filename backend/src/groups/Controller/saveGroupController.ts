import { SaveGroupMemberService } from "../../members/Domain";
import { ResponseHandler } from "../../utils";
import { SaveGroupDetailsType, saveGroupRequest, SaveGroupService } from "../Domain";
import { Request,Response } from "express";

type UseCase = (attributes: SaveGroupDetailsType) => Promise<void>;

type Services = {
    saveGroupService: SaveGroupService;
    saveGroupMemberService: SaveGroupMemberService
}

export const saveGroupDetailsRequest = ({saveGroupService,saveGroupMemberService}:Services, responseHandler: ResponseHandler, useCase: UseCase)=>
    (request: Request, response: Response): void => {

    const sanitizedParameters ={
        group_name: request.body.groupName,
        created_by: request.body.createdBy,
    }

    const parameters: saveGroupRequest = sanitizedParameters

    void useCase({
        saveGroupService,
        saveGroupMemberService,
        parameters,
        responseHandler: responseHandler(response)
    })
}