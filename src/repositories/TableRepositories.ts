import { EntityRepository, Repository } from "typeorm";
import { Table } from "../entities/Table";

@EntityRepository(Table)
class TableRepositories extends Repository<Table> { }

export { TableRepositories };