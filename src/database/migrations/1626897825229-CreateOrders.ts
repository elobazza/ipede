import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1626897825229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pedido",
                columns: [
                    {
                        name: "idPedido",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "idComanda",
                        type: "integer",
                    },
                    {
                        name: "situacao",
                        type: "integer",
                    },
                    {
                        name: "data",
                        type: "varchar(10)",
                    },
                    {
                        name: "hora",
                        type: "varchar(8)",
                    },
                    {
                        name: "observacao",
                        type: "varchar(100)",
                        isNullable: true,
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKComanda",
                        referencedTableName: "comanda",
                        referencedColumnNames: ["idComanda"],
                        columnNames: ["idComanda"],
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
