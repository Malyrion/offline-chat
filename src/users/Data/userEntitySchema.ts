import { EntitySchema } from "typeorm";
import { UserEntity } from "./userEntityTypes";

export const UserEntitySchema = new EntitySchema<UserEntity>({
    name : "chat_users",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
        },
        created_at: {
            name: "created_at",
            type: "timestamp with time zone",
            createDate: true,
        },
        updated_at: {
            name: "updated_at",
            type: "timestamp with time zone",
            updateDate: true,
        },
            deleated_at: {
            name: "deleated_at",
            type: "timestamp with time zone",
            deleteDate: true,
            nullable: true,
        },
        username: {
            type: String,
            length: 50,
            unique: true,
            nullable: false,
        },
    },
});