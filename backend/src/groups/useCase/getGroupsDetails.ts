import { GetGroupsDetailsType } from "../Domain";

export const getGroupsDetails = async({
    getGroupsService,
    parameters,
    responseHandler
}: GetGroupsDetailsType): Promise<void> => {
    console.log("New Group Get detasils request recieved")   
    try{
        const groups = await getGroupsService();
        return responseHandler({parsedResponse:{groups: groups}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}