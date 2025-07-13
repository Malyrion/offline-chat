import { EntitySchema } from "typeorm";
import { MessagesEntity } from "./messagesEntityTypes";

export const MessagesEntitySchema = new EntitySchema<MessagesEntity>({
    name: "chat_messages",
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
        user_id: {
            type: 'uuid',
            name: 'user_id',
            nullable: false,
        },
        group_id: {
            type: 'uuid',
            name: 'group_id',
            nullable: false,
        },
        content: {
            type: "text",
            nullable: false,
        },message_time: {
            name: "message_time",
            type: "timestamp with time zone",
            nullable: false,},
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "chat_users",
            joinColumn: {
                name: "user_id",
                referencedColumnName: "id",
            },
        },
        group: {
            type: "many-to-one",
            target: "chat_groups",
            joinColumn: {
                name: "group_id",
                referencedColumnName: "id",
            },
        },
    },
    indices: [
        {
            name: "IDX_MESSAGES_USER_ID",
            columns: ["user_id"],
        },
        {
            name: "IDX_MESSAGES_GROUP_ID",
            columns: ["group_id"],
        },
        {
            name: "IDX_MESSAGES_TIME",
            columns: ["message_time"],
        },
    ],
});