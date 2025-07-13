import { SaveMessageDetailsType } from "../Domain";

export const saveMessageDetails = async({
    saveMessageService,
    parameters,
    responseHandler
}: SaveMessageDetailsType): Promise<void> => {
    console.log("New Message save details request recieved")   
    try{
        const newMessage = await saveMessageService(parameters);
       
        return responseHandler({parsedResponse:{message: newMessage}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}