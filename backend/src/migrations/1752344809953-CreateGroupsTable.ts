import { MigrationInterface, QueryRunner, Table ,TableForeignKey} from "typeorm";

export class CreateGroupsTable1752344809953 implements MigrationInterface {
 public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'chat_groups',
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
                    name: 'created_by',
                    type: 'uuid',    
                    isNullable: false,               
                },
                {
                    name: 'group_name',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,             
                },
            ],
        })
        );
        await queryRunner.createForeignKey(
            'chat_groups', new TableForeignKey({
                columnNames:[ 'created_by'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chat_users',
        })
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('chat_groups');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('created_by') !== -1);
    if (foreignKey) {
        await queryRunner.dropForeignKey('chat_groups', foreignKey);
    }
        await queryRunner.dropTable('chat_groups');
    }

}
