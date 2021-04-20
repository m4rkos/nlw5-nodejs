import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Settings";

@EntityRepository(Setting)
class SettingsRepositories extends Repository<Setting>{}

export { SettingsRepositories }