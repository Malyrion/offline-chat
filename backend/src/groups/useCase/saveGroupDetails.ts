import { SaveGroupDetailsType } from "../Domain";

export const saveGroupDetails = async({
    saveGroupService,
    saveGroupMemberService,
    parameters,
    responseHandler
}: SaveGroupDetailsType): Promise<void> => {
    console.log("New Group save details request recieved")   
    const {  created_by } = parameters;
    try{
        const newGroup = await saveGroupService(parameters);
        const newGroupMember = await saveGroupMemberService({
            group_id: newGroup.id,
            user_id: created_by,
            join_date: new Date()
        });
        return responseHandler({parsedResponse:{group: newGroup, member: newGroupMember}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}