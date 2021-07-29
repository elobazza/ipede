import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateKitchens1626897279467 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cozinha",
                columns: [
                    {
                        name: "idCozinha",
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
        await queryRunner.dropTable("cozinha");
    }

}
