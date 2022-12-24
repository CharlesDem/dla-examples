import { AdminHandler } from "./modules/admin/admin.handler";
import { AdminRepository } from "./modules/admin/admin.repository";
import { AdminService } from "./modules/admin/admin.service";

export const adminHandler = new AdminHandler(new AdminService(new AdminRepository()));