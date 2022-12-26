import { PersonDTO } from "./person.dto";
import { Person } from "./person.model";
import { PersonMapper } from "./person.mapper";
import { IRepositoryCommon } from "../core/respository.interface";

export class PersonRepository implements IRepositoryCommon<PersonDTO> {

    async findById(id: number): Promise<PersonDTO | null> {
        return await Person.findByPk(id)
            .then(person => PersonMapper.mapToDto(person))
            
    }

    findAll(): Promise<PersonDTO[]> {
        throw new Error("Method not implemented.");
    }

    create(t: PersonDTO): Promise<PersonDTO> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }



}