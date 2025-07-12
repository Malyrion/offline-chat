import { SaveGroupMemberDetailsType } from "../Domain";

export const saveGroupMemberDetails = async({
    saveGroupMemberService,
    parameters,
    responseHandler
}: SaveGroupMemberDetailsType): Promise<void> => {
    console.log("New Group Member save details request recieved")   
    try{
        const newGroupMember = await saveGroupMemberService(parameters);
        return responseHandler({parsedResponse:{GroupMember: newGroupMember}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}