

export type UserEntity = {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleated_at?: Date;
    username: string;
};