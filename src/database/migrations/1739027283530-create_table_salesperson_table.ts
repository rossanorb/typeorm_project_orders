import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSalespersonTable1739027283530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'salesperson',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'firstName',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'lastName',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'number_id',
                        type: 'int'
                    },                    
                ]
            })
        )        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('salesperson');
    }

}
