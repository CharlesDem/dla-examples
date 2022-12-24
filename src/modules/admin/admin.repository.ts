import sequelize from "../../sequelize";
import { IRepository } from "../core/respository.interface";
import { Person } from "../person/models/person.model";
import { AdminDTO } from "./admin.dto";
import { Admin } from "./admin.model";


export class AdminRepository implements IRepository<AdminDTO> {

    findAll(): Promise<AdminDTO[]> {
        throw new Error("Method not implemented.");
    }

    async findById(id: number): Promise<AdminDTO | null> {

        return null
        //   return await Admin.findByPk(id)
        //        .then(admin => AdminMapper.mapToDto(admin))
    }


    /**
     * 
     * @param admin 
     * @returns 
     */
    async create(admin: AdminDTO): Promise<AdminDTO> {

        const t = await sequelize.transaction();

        try {
            const newPerson = await Person.create(
                {
                    personne_nom: admin.personneNom,
                    personne_prenom: admin.personnePrenom
                },
                {
                    transaction: t
                }
            );

            const newAdmin = await Admin.create({
                personne_id: newPerson.personId,
                service: admin.service
            },
                {
                    transaction: t
                }
            );

            const result: AdminDTO = {
                personId: newPerson.getDataValue('personne_id'),
                personneNom: newPerson.getDataValue('personne_nom'),
                personnePrenom: newPerson.getDataValue('personne_prenom'),
                service: newAdmin.service
            }

            await t.commit();
            return result;
        } catch (err) {
            await t.rollback()
            throw err
        }
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }



}