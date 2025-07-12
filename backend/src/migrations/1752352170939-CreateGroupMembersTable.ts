import { MigrationInterface, QueryRunner,Table,TableForeignKey } from "typeorm";

export class CreateGroupMembersTable1752352170939 implements MigrationInterface {
 public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'chat_group_members',
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
                    name: 'join_date',
                    type: 'timestamp with time zone',    
                    isNullable: false,               
                },
                {
                    name: 'is_active',
                    type: 'boolean',
                    default: true,
                    isNullable: false,             
                },
            ],
        })
        );
        await queryRunner.createForeignKey(
            'chat_group_members', new TableForeignKey({
                columnNames:[ 'group_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chat_groups',
        })
    );        await queryRunner.createForeignKey(
            'chat_group_members', new TableForeignKey({
                columnNames:[ 'user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chat_users',
        })
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('chat_group_members');
    const groupFk = table.foreignKeys.find(fk => fk.columnNames.indexOf('group_id') !== -1);
    const userFk = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1);

    if (table) {
        await queryRunner.dropForeignKey('chat_group_members', groupFk);
        await queryRunner.dropForeignKey('chat_group_members', userFk);

    }
        await queryRunner.dropTable('chat_group_members');
    }

}
