import {Response} from 'express';

export type ResponseForUser<T> = {
    parsedResponse?: Readonly<T>;
    error?: Readonly<Error>;
}

export const DEFAULT_ERROR_CODE = 500;

export type ResponseHandlerWithResponse = <T>(response: Readonly<ResponseForUser<T>>) => void;
export type ResponseHandler = (response: Response) => ResponseHandlerWithResponse;


export const responseHandler = (response: Response) => <T>({parsedResponse,error}: Readonly<ResponseForUser<T>>): void => {
    if (error) {
        console.error("Failed with error", error);
        response.status(DEFAULT_ERROR_CODE).send({error: error.message});
    }else{
        console.log("Sending response", parsedResponse);
        response.send(parsedResponse);
    }
}