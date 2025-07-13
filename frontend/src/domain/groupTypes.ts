import type { IAddUserResponse, UserEntity } from "./userTypes";

export type ICreateGroupResponse = {
id: string; 
created_at: Date;
updated_at: Date;
deleated_at?: Date;
created_by: string;
group_name: string;
owner?: IAddUserResponse;
members?: UserEntity[]; 
};

export type ICreateGroupPayload = {
    groupName: string;
    createdBy: string;   
};

export type GroupsInformation = {
    openGroups: ICreateGroupResponse[];
    yourGroups: ICreateGroupResponse[];
}


export type IGetGroupsPayload = {
  userId: string;
};

export type IGetGroupsResponse = {
    openGroups: ICreateGroupResponse[];
    yourGroups: ICreateGroupResponse[];
};