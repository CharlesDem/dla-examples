import { PersonneDTO } from "./dto/personne.dto";
import { IService } from "~/core/service.interface";
import { IRepository } from "../core/respository.interface";

export class PersonService implements IService<PersonneDTO>{

    private personRepository: IRepository<PersonneDTO>;

    constructor(_personRepository: IRepository<PersonneDTO>) {
        this.personRepository = _personRepository;
    }

    /**
     * 
     * @param options 
     * @returns 
     */
    async findAll(options?: any): Promise<PersonneDTO[]> {
        return this.personRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.personRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(personne: PersonneDTO): Promise<PersonneDTO> {
        return this.personRepository.update(personne);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<PersonneDTO> {
        return this.personRepository.findById(id).then(personDto => {
            personDto.personneNom = "M. " + personDto.personneNom; //INFO dans le service on implémente la logique métier(fut-elle basique comme ici)
            return personDto;
        });
    }

}