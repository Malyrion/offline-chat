import { groupResponse } from "../Domain";

export const filterUserOwnedGroups = (groups: groupResponse[], userId: string): [groupResponse[], groupResponse[]] => {
    const openGroups:groupResponse[] = [];
    const joinedGroups:groupResponse[] = [];

    groups.forEach(group => {
        if (group.members?.some(member => member.user_id === userId)) {
            joinedGroups.push(group);
        } else  {
            openGroups.push(group);
        }
    });

    return [openGroups, joinedGroups];
}