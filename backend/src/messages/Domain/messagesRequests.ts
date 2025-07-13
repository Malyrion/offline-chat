import { messageResponse } from "./messagesResponse";
import { ResponseHandlerWithResponse } from "../../utils";

export type saveMessageRequest = {
    user_id: string;
    group_id: string;
    content: string;
    message_time: Date;
}

export type getGroupMessagesRequest = {
    group_id: string;
}



export type SaveMessageService = (params:Readonly<saveMessageRequest>) =>Promise<messageResponse>;
export type GetGroupMessagesService = (params:Readonly<getGroupMessagesRequest>) =>Promise<messageResponse[]>;



export type SaveMessageDetailsType ={
    saveMessageService: SaveMessageService,
    parameters: saveMessageRequest;
    responseHandler: ResponseHandlerWithResponse
}

export type GetGroupMessagesDetailsType ={
    getGroupMessagesService: GetGroupMessagesService,
    parameters: getGroupMessagesRequest;
    responseHandler: ResponseHandlerWithResponse
}