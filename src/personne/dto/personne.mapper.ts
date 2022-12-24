import { PersonneDTO } from "./personne.dto";
import { PersonneDAO } from "../data/personne.dao";

export class PersonneMapper {

     static mapToDto(person: PersonneDAO): PersonneDTO {
        const dto : PersonneDTO = {
            personneNom: person.personneNom,
            personnePrenom: person.personnePrenom,
            email: person.email
        }
        return dto;
    }

}

