import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderItems1626898170153 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "itempedido",
                columns: [
                    {
                        name: "idItemPedido",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "idItemCardapio",
                        type: "integer",
                    },
                    {
                        name: "idPedido",
                        type: "integer",
                    },
                    {
                        name: "quantidade",
                        type: "integer",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKItemCardapio",
                        referencedTableName: "itemcardapio",
                        referencedColumnNames: ["idItemCardapio"],
                        columnNames: ["idItemCardapio"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKPedido",
                        referencedTableName: "pedido",
                        referencedColumnNames: ["idPedido"],
                        columnNames: ["idPedido"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("itempedido");
    }

}
