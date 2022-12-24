import sequelize from "../../core/database/sequelize";
import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository, IRepositoryCreate } from "../../core/respository.interface";
import { PersonneDAO } from "../../personne/data/personne.dao";
import { AdminDAO } from "./admin.dao";
import { AdminPersonDTO, AdminDTO } from "../dto/admin.dto";
import { AdminMapper } from "../dto/admin.mapper";

export interface IAdminRepository extends IRepositoryCreate<AdminPersonDTO>, IRepository<AdminDTO> { }

export class AdminRepository implements IAdminRepository {

    /**
     * 
     * @param admin
     */
    async update(admin: AdminDTO): Promise<AdminDTO> {

        if (admin.personneId === null) throw new InputError("No id for person or admin");

        const row = await AdminDAO.findByPk(admin.personneId);

        if (row === null) throw new NotFoundError("Person not found");

        row.service = admin.service;
        const result = await row.save()
        return AdminMapper.mapToAdminOnlyDto(result);
    }

    /**
     * 
     * @param filter 
     * @returns $
     */
    async findAll(filter: any): Promise<AdminDTO[]> {

        return (await AdminDAO.findAll({
            where: filter
        })).map(admin => AdminMapper.mapToAdminOnlyDto(admin));
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<AdminDTO> {
        const result = await AdminDAO.findByPk(id);
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
            const newPerson = await PersonneDAO.create(
                {
                    personneNom: admin.personneNom,
                    personnePrenom: admin.personnePrenom,
                    email: admin.email
                },
                {
                    transaction: t
                }
            );

            const newAdmin = await AdminDAO.create({
                personneId: newPerson.personneId,
                service: admin.service
            },
                {
                    transaction: t
                }
            );

            const result: AdminPersonDTO = {
                personneId: newPerson.personneId,
                personneNom: newPerson.personneNom,
                personnePrenom: newPerson.personnePrenom,
                email: newPerson.email,
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
    async delete(id: number): Promise<boolean> {
        const result = await PersonneDAO.destroy({
            where: {
                personneId: id
            }
        });
        return result == 1;
    }


}