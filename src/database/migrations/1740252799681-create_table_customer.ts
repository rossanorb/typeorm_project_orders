import { toNamespacedPath } from "path";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCustomer1740252799681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'customer',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'number_id',
                        isUnique: true,                        
                        type: 'bigInt',
                        default: null,
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '30',
                        isNullable: false
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        length: '14',
                        isNullable: true
                    },                                        
                    {
                        name: 'address',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        length: '20',
                        isNullable: true
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                        length: '2',
                        isNullable: true
                    },
                    {
                        name: 'postal',
                        type: 'varchar',
                        length: '15',
                        isNullable: true
                    },                    
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customer');        
    }

}
