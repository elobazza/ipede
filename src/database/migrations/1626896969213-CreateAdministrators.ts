import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdministrators1626896969213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "administrador",
                columns: [
                    {
                        name: "id_administrador",
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
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("administrador");
    }

}
