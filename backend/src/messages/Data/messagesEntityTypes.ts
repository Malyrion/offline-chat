import { GroupEntity } from "../../groups/Data";
import { UserEntity } from "../../users/Data";


export type MessagesEntity = {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleated_at?: Date;
    user_id: string;
    group_id: string;
    content: string;
    message_time: Date;
    user?: UserEntity;
    group?: GroupEntity;
};