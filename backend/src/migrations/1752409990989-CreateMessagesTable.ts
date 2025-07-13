import { MigrationInterface, QueryRunner,Table,TableForeignKey, TableIndex } from "typeorm";

export class CreateMessagesTable1752409990989 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'chat_messages',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },
                                {
                    name: 'deleated_at',
                    type: 'timestamp with time zone',
                    isNullable: true,
                },
                {
                    name: 'user_id',
                    type: 'uuid',    
                    isNullable: false,               
                },                {
                    name: 'group_id',
                    type: 'uuid',    
                    isNullable: false,               
                },               {
                    name: 'message_time',
                    type: 'timestamp with time zone',    
                    isNullable: false,               
                },
                {
                    name: 'content',
                    type: 'text',
                    isNullable: false,             
                },
            ],
        })
        );
        await queryRunner.createForeignKey(
            'chat_messages', new TableForeignKey({
                columnNames:[ 'group_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chat_groups',
        })
    );        await queryRunner.createForeignKey(
            'chat_messages', new TableForeignKey({
                columnNames:[ 'user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chat_users',
        })
    );         await queryRunner.createIndex(
            'chat_messages', new TableIndex({
                name:"IDX_MESSAGES_GROUP_ID",
                columnNames: ['user_id'],
        })
    );  await queryRunner.createIndex(
            'chat_messages', new TableIndex({
                name:"IDX_MESSAGES_USER_ID",
                columnNames: ['user_id'],
        })
    ); await queryRunner.createIndex(
            'chat_messages', new TableIndex({
                name:"IDX_MESSAGES_TIME",
                columnNames: ['user_id'],
        })
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('chat_messages');
    const groupFk = table.foreignKeys.find(fk => fk.columnNames.indexOf('group_id') !== -1);
    const userFk = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1);

    if (table) {
        await queryRunner.dropForeignKey('chat_messages', groupFk);
        await queryRunner.dropForeignKey('chat_messages', userFk);
        await queryRunner.dropIndex('chat_messages', "IDX_MESSAGES_USER_ID");
        await queryRunner.dropIndex('chat_messages', "IDX_MESSAGES_TIME");
        await queryRunner.dropIndex('chat_messages', "IDX_MESSAGES_GROUP_ID");
        await queryRunner.dropForeignKey('chat_messages', userFk);
    }
        await queryRunner.dropTable('chat_messages');
    }

}