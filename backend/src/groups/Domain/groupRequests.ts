import { groupResponse } from "./groupResponse";
import { ResponseHandlerWithResponse } from "../../utils";

export type saveGroupRequest = {
    group_name: string;
    created_by: string;   
}

export type getGroupsRequest = {
    userId: string;
}



export type SaveGroupService = (params:Readonly<saveGroupRequest>) =>Promise<groupResponse>;
export type GetGroupsService = () =>Promise<groupResponse[]>;



export type SaveGroupDetailsType ={
    saveGroupService: SaveGroupService,
    parameters: saveGroupRequest;
    responseHandler: ResponseHandlerWithResponse
}

export type GetGroupsDetailsType ={
    getGroupsService: GetGroupsService,
    parameters: getGroupsRequest;
    responseHandler: ResponseHandlerWithResponse
}