import sequelize from "../../sequelize";
import { NotFoundError } from "../core/errors/errors";
import { Filter } from "../core/filters";
import { IRepository, IRepositoryCreate } from "../core/respository.interface";
import { Person } from "../person/person.model";
import { AdminPersonDTO, AdminDTO } from "./admin.dto";
import { AdminMapper } from "./admin.mapper";
import { Admin } from "./admin.model";

export interface IAdminRepository extends IRepositoryCreate<AdminPersonDTO>, IRepository<AdminDTO> { }


export class AdminRepository implements IAdminRepository {

    /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<AdminDTO[]> {

        return (await Admin.findAll({
            where: filter
        })).map(admin => AdminMapper.mapToAdminOnlyDto(admin));
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<AdminDTO> {
        const result = await Admin.findByPk(id);
        if (result === null) throw new NotFoundError("Not found");
        return AdminMapper.mapToAdminOnlyDto(result);
    }


    /**
     * 
     * @param admin 
     * @returns 
     */
    async create(admin: AdminPersonDTO): Promise<AdminPersonDTO> {

        const t = await sequelize.transaction();

        try {
            const newPerson = await Person.create(
                {
                    personNom: admin.personneNom,
                    personPrenom: admin.personnePrenom
                },
                {
                    transaction: t
                }
            );

            const newAdmin = await Admin.create({
                personId: newPerson.personId,
                service: admin.service
            },
                {
                    transaction: t
                }
            );

            const result: AdminPersonDTO = {
                personId: newPerson.personId,
                personneNom: newPerson.personNom,
                personnePrenom: newPerson.personPrenom,
                service: newAdmin.service
            }

            await t.commit();
            return result;
        } catch (err) {
            await t.rollback()
            throw err;
        }
    }

    /**
     * 
     * @param id 
     */
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }



}