import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderItems1626898170153 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "itempedido",
                columns: [
                    {
                        name: "id_itempedido",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "id_itemcardapio",
                        type: "integer",
                    },
                    {
                        name: "id_pedido",
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
                        referencedColumnNames: ["id_itemcardapio"],
                        columnNames: ["id_itemcardapio"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKPedido",
                        referencedTableName: "pedido",
                        referencedColumnNames: ["id_pedido"],
                        columnNames: ["id_pedido"],
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
