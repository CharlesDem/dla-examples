import { NotFoundError } from "../core/errors/errors";
import { Filter } from "../core/filters";
import { IServiceCreate, IService } from "../core/service.interface";
import { AdminPersonDTO, AdminDTO } from "./admin.dto";
import { IAdminRepository } from "./admin.repository";

export interface IAdminService extends IService<AdminDTO>, IServiceCreate<AdminPersonDTO> {}

export class AdminService implements IAdminService{

    private adminrepository: IAdminRepository;

    constructor(adminrepository: IAdminRepository) {
        this.adminrepository = adminrepository;
    }

    /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<AdminDTO[]> {
        return this.adminrepository.findAll(filter)
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<AdminDTO | null> {
        return this.adminrepository
            .findById(id);
            
    }

    /**
     * 
     * @param admin 
     * @returns 
     */
    async create(admin: AdminPersonDTO): Promise<AdminPersonDTO> {
        return this.adminrepository.create(admin);
    }

    /**
     * 
     * @param id 
     */
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}