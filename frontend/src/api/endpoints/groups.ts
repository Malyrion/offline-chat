export type GroupsEnpoints = {
    joinGroup: (groupId:string) => string;
    createGroup: () => string;
    getGroups: (userId:string) => string;
    saveMessage: (groupId:string) => string;
    getGroupMessages: (groupId:string) => string;

}

const GroupsEndpoints: GroupsEnpoints = {
    //POST /groups/:groupId
    joinGroup: (groupId:string): string => `/groups/${groupId}`,
    //POST /groups
    createGroup: (): string => `/groups`,
     //GET /groups
    getGroups: (userId:string): string => `/groups/${userId}`,
    //POST /groups/:groupId/messages
    saveMessage: (groupId:string): string => `/groups/${groupId}/messages`,
    //GET/groups/:groupId/messages
    getGroupMessages: (groupId:string): string => `/groups/${groupId}/messages`,

}

export default GroupsEndpoints;
