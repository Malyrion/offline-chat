import { SaveGroupDetailsType } from "../Domain";

export const saveGroupDetails = async({
    saveGroupService,
    parameters,
    responseHandler
}: SaveGroupDetailsType): Promise<void> => {
    console.log("New Group save details request recieved")   
    try{
        const newGroup = await saveGroupService(parameters);
        return responseHandler({parsedResponse:{Group: newGroup}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}