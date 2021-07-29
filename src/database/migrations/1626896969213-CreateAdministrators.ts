import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdministrators1626896969213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "administrador",
                columns: [
                    {
                        name: "idAdministrador",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "login",
                        type: "varchar(30)",
                    },
                    {
                        name: "senha",
                        type: "varchar(100)",
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("administrador");
    }

}
