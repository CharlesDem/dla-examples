import { IServiceCreate, IService } from "../core/service.interface";
import { AdminPersonDTO, AdminDTO } from "./dto/admin.dto";
import { IAdminRepository } from "./data/admin.repository";

export interface IAdminService extends IService<AdminDTO>, IServiceCreate<AdminPersonDTO> {}

export class AdminService implements IAdminService{ 

    private adminrepository: IAdminRepository; //INFO injection de l'interface du repository dans le service

    constructor(adminrepository: IAdminRepository) {
        this.adminrepository = adminrepository;
    }

    /**
     * 
     * @param admin 
     */
    async update(admin: AdminDTO): Promise<AdminDTO> {
       return this.adminrepository.update(admin);
    }

    /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<AdminDTO[]> {
        return this.adminrepository.findAll(filter);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<AdminDTO> {
        return this.adminrepository.findById(id);
            
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
    async delete(id: number): Promise<boolean> {
        return this.adminrepository.delete(id);
    }

}