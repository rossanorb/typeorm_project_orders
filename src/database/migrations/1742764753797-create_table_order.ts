import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableOrder1742764753797 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'order_date',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: "customer_id",
                        type: "int",
                    },
                    {
                        name: "sales_person_id",
                        type: "int",
                    }                    
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            "order",
            new TableForeignKey({
                columnNames: ["customer_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "customer",
            }),
        )

        await queryRunner.createForeignKey(
            "order",
            new TableForeignKey({
                columnNames: ["sales_person_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "sales_person",
            }),
        )        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order');
    }

}
