import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProduct1750512801596 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '20',
                        isNullable: false
                    },                    
                    {
                        name: 'price',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: "vendor_id",
                        type: "int",
                    },
                    {
                        name: "product_category_id",
                        type: "int",
                    }                    
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: ['product_category_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'product_category'
            })
        )

        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: ['vendor_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'vendor'
            })
        )        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }

}
