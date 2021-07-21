import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCommands1626897506890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comanda",
                columns: [
                    {
                        name: "id_comanda",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "id_mesa",
                        type: "integer",
                    },
                    {
                        name: "nome_cliente",
                        type: "varchar(50)",
                    },
                    {
                        name: "situacao",
                        type: "integer",
                    },
                    {
                        name: "abertura",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "fechamento",
                        type: "timestamp",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKMesa",
                        referencedTableName: "mesa",
                        referencedColumnNames: ["id_mesa"],
                        columnNames: ["id_mesa"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comanda");
    }

}
