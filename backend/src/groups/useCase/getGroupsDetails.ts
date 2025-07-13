import { filterUserOwnedGroups } from "../Data";
import { GetGroupsDetailsType } from "../Domain";

export const getGroupsDetails = async({
    getGroupsService,
    parameters,
    responseHandler
}: GetGroupsDetailsType): Promise<void> => {
    console.log("New Group Get detasils request recieved")   
    const { userId } = parameters;
    try{
        const groups = await getGroupsService();
        const [openGroups, joinedGroups] = filterUserOwnedGroups(groups, userId);
        return responseHandler({parsedResponse:{openGroups: openGroups, yourGroups: joinedGroups}});
    }catch (error) {
        responseHandler({error: error as Error});
    }
}