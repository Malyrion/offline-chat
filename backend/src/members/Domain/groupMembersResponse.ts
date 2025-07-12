import { GroupEntity } from "../../groups/Data";
import { UserEntity } from "../../users/Data";

export type groupMembersResponse ={
    id: string;
    created_at: Date;
    updated_at: Date;
    deleated_at?: Date;
    user_id: string;
    group_id: string;
    join_date: Date;
    is_active: boolean;
    user?: UserEntity;
    group?: GroupEntity;
    
}