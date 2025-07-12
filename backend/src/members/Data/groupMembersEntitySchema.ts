import { EntitySchema } from "typeorm";
import { GroupMembersEntity } from "./groupMembersEntityTypes";

export const GroupMembersEntitySchema = new EntitySchema<GroupMembersEntity>({
    name: "chat_group_members",
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
        join_date: {
            name: "join_date",
            type: "timestamp with time zone",
            nullable: false,
        },
         is_active: {
            name: "is_active",
            type: "boolean",
            nullable: false,
            default: true,
        },
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "chat_users",
            joinColumn: {
                name: "user_id",
                referencedColumnName: "id",
            },
        },group: {
            type: "many-to-one",
            target: "chat_groups",
            joinColumn: {
                name: "group_id",
                referencedColumnName: "id",
            },
        }},
});