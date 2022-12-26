import { PersonDTO } from "./person.dto";
import { IRepository } from "../core/respository.interface";
import { IserviceCommon } from "~/modules/core/service.interface";

export class PersonService {

    private personRepository: IserviceCommon<PersonDTO>;

    constructor(_personRepository : IserviceCommon<PersonDTO>) {
        this.personRepository = _personRepository;
    }

    async findById(id: number): Promise<PersonDTO | null>{
        return this.personRepository.findById(id).then(personDto => {
            if (personDto === null) return null;
            personDto.nom = "M. " + personDto.nom;
            return personDto;
        });
    }

}