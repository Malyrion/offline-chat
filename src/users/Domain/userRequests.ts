import { userResponse } from "./userResponse";
import { ResponseHandlerWithResponse } from "../../utils";

export type saveUserRequest = {
    username: string;   
}

export type SaveUserService = (params:Readonly<saveUserRequest>) =>Promise<userResponse>;

export type SaveUserDetailsType ={
    saveUserService: SaveUserService,
    parameters: saveUserRequest;
    responseHandler: ResponseHandlerWithResponse
}