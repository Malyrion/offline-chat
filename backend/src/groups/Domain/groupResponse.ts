import { UserEntity } from "../../users/Data";

export type groupResponse ={
    id: string;
    created_at: Date;
    updated_at: Date;
    deleated_at?: Date;
    created_by: string;
    group_name: string;
    owner?: UserEntity;
}