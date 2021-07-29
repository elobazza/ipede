import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenuItems1626897992546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "itemcardapio",
                columns: [
                    {
                        name: "idItemCardapio",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar(30)",
                    },
                    {
                        name: "descricao",
                        type: "varchar(100)",
                    },
                    {
                        name: "valorUnitario",
                        type: "numeric",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("itemcardapio");
    }

}
