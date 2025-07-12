import { EntitySchema } from "typeorm";
import { GroupEntity } from "./groupEntityTypes";

export const GroupEntitySchema = new EntitySchema<GroupEntity>({
    name: "chat_groups",
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
        created_by: {
            type: 'uuid',
            name: 'created_by',
            nullable: false,
        },
        group_name: {
            type: "varchar",
            length: "50",
            nullable: false,
        },
    },
    relations: {
        owner: {
            type: "many-to-one",
            target: "chat_users",
            joinColumn: {
                name: "created_by",
                referencedColumnName: "id",
            },
        }},
});