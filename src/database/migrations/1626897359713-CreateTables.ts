import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1626897359713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "mesa",
                columns: [
                    {
                        name: "id_mesa",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "login",
                        type: "varchar(30)",
                    },
                    {
                        name: "senha",
                        type: "varchar(32)",
                    },
                    {
                        name: "numero",
                        type: "integer",
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mesa");
    }

}
