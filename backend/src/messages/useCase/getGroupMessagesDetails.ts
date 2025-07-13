import { GetGroupMessagesDetailsType } from "../Domain";

export const getGroupMessagesDetails = async({
    getGroupMessagesService,
    parameters,
    responseHandler
}: GetGroupMessagesDetailsType): Promise<void> => {
    console.log("New Group Messages Get details request received");   
    try{
        const groupMessages = await getGroupMessagesService(parameters);
        return responseHandler({parsedResponse:{ messages:groupMessages }});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}