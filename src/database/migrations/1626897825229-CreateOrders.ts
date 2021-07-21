import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1626897825229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pedido",
                columns: [
                    {
                        name: "id_pedido",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "id_comanda",
                        type: "integer",
                    },
                    {
                        name: "situacao",
                        type: "integer",
                    },
                    {
                        name: "datahora",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "observacao",
                        type: "varchar(100)",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKComanda",
                        referencedTableName: "comanda",
                        referencedColumnNames: ["id_comanda"],
                        columnNames: ["id_comanda"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedido");
    }

}
