export interface IAddUserPayload {
    username: string;
}

export interface IAddUserResponse{
    id: string;
    created_at: Date;
    updated_at: Date;
    deleated_at?: Date;
    username: string;
}