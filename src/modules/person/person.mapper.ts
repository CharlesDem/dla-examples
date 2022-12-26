import { PersonDTO } from "./person.dto";
import { Person } from "./person.model";

export class PersonMapper {

     static mapToDto(person: Person | null): PersonDTO | null {
        if (person === null) return null;
        const dto : PersonDTO = {
            nom: person.personNom,
            prenom: person.personPrenom
        }
        return dto;
    }

    static mapToModel() {

    }

}

