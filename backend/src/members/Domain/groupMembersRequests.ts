import { groupMembersResponse } from "./groupMembersResponse";
import { ResponseHandlerWithResponse } from "../../utils";

export type saveGroupMemberRequest = {
    group_id: string;
    user_id: string;
    join_date: Date;
}

export type getGroupMembersRequest = {
    group_id: string;
}



export type SaveGroupMemberService = (params:Readonly<saveGroupMemberRequest>) =>Promise<groupMembersResponse>;
export type GetGroupMembersService = (params:Readonly<getGroupMembersRequest>) =>Promise<groupMembersResponse[]>;



export type SaveGroupMemberDetailsType ={
    saveGroupMemberService: SaveGroupMemberService,
    parameters: saveGroupMemberRequest;
    responseHandler: ResponseHandlerWithResponse
}

export type GetGroupMebmersDetailsType ={
    getGroupsMembersService: GetGroupMembersService,
    parameters: getGroupMembersRequest;
    responseHandler: ResponseHandlerWithResponse
}