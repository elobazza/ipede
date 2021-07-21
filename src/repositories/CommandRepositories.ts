import { EntityRepository, Repository } from "typeorm";
import { Command } from "../entities/Command";

@EntityRepository(Command)
class CommandRepositories extends Repository<Command> { }

export { CommandRepositories };