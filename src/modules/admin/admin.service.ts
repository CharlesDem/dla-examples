import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { AdminDTO } from "./admin.dto";
import { Filter } from "./admin.handler";

export class AdminService implements IService<AdminDTO>{

    private adminrepository: IRepository<AdminDTO>;

    constructor(adminrepository: IRepository<AdminDTO>) {
        this.adminrepository = adminrepository;
    }

    findAll(filter : Filter): Promise<AdminDTO[]> {
        console.log(filter.filter)
        throw new Error("Method not implemented.");
    }

    async findById(id: number): Promise<AdminDTO | null> {
        return this.adminrepository
            .findById(id)
            .then(admin => {
                if (admin === null) return null;
                admin.personneNom = "M. " + admin.personneNom;
                return admin;
            });
    }

    create(admin: AdminDTO): Promise<AdminDTO> {
        return this.adminrepository.create(admin);
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}