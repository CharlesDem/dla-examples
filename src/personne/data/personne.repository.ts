import { PersonneDTO } from "../dto/personne.dto";
import { PersonneDAO } from "./personne.dao";
import { PersonneMapper } from "../dto/personne.mapper";
import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository } from "../../core/respository.interface";

export class PersonRepository implements IRepository<PersonneDTO> {

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<PersonneDTO> {
        const result = await PersonneDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Person not found");
        return PersonneMapper.mapToDto(result);
    }

    /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<PersonneDTO[]> {
        return (await PersonneDAO.findAll({
            where: filter
        })).map(person => PersonneMapper.mapToDto(person));
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

        /**
     * 
     * @param person
     */
        async update(person: PersonneDTO): Promise<PersonneDTO> {

            if (person.personneId === null) throw new InputError("No id for person");
    
            const row = await PersonneDAO.findByPk(person.personneId);
    
            if (row === null) throw new NotFoundError("Person not found");
    
            row.personneNom = person.personneNom;
            row.personnePrenom = person.personnePrenom;
            const result = await row.save()
            return PersonneMapper.mapToDto(result);
        }
}