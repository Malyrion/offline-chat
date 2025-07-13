export interface IAddUserPayload {
    username: string;
}
export interface UserEntity {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleated_at?: Date;
    username: string;
}

export interface IAddUserResponse{
    user:UserEntity
}