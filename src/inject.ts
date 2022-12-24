/* istanbul ignore file */
import { AdminHandler } from "./admin/controller/admin.handler";
import { AdminRepository } from "./admin/data/admin.repository";
import { AdminService } from "./admin/admin.service";
import { PersonHandler } from "./personne/controller/personne.handler";
import { PersonRepository } from "./personne/data/personne.repository";
import { PersonService } from "./personne/personne.service";

export const adminHandler = new AdminHandler(new AdminService(new AdminRepository()));
export const personHandler = new PersonHandler(new PersonService(new PersonRepository()));