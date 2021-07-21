import { EntityRepository, Repository } from "typeorm";
import { Administrator } from "../entities/Administrator";

@EntityRepository(Administrator)
class AdministratorRepositories extends Repository<Administrator> { }

export { AdministratorRepositories };