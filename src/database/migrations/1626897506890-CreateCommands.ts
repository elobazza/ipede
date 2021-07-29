import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCommands1626897506890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comanda",
                columns: [
                    {
                        name: "idComanda",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "idMesa",
                        type: "integer",
                    },
                    {
                        name: "nomeCliente",
                        type: "varchar(50)",
                    },
                    {
                        name: "situacao",
                        type: "integer",
                    },
                    {
                        name: "dataAbertura",
                        type: "varchar(10)",
                    },
                    {
                        name: "horaAbertura",
                        type: "varchar(8)",
                    },
                    {
                        name: "dataFechamento",
                        type: "varchar(10)",
                        isNullable: true,
                    },
                    {
                        name: "horaFechamento",
                        type: "varchar(8)",
                        isNullable: true,
                    }

                ],
                foreignKeys: [
                    {
                        name: "FKMesa",
                        referencedTableName: "mesa",
                        referencedColumnNames: ["idMesa"],
                        columnNames: ["idMesa"],
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
