import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVendor1750511668019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vendor',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'company_name',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    },
                    {
                        name: 'brand_name',
                        type: 'varchar',
                        length: '50',
                        isNullable: true
                    },
                    {
                        name: 'ein',
                        type: 'varchar',
                        length: '15',
                        isNullable: true
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        length: '14',
                        isNullable: false
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
        await queryRunner.dropTable('vendor');
    }

}
