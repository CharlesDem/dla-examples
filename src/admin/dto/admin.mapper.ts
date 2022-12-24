import { PersonneDAO } from "../../personne/data/personne.dao";
import { AdminDAO } from "../data/admin.dao";
import { AdminDTO, AdminPersonDTO } from "./admin.dto";

export class AdminMapper {

    static mapToAdminOnlyDto(admin: AdminDAO): AdminDTO {
        const dto: AdminDTO = {
            personneId: admin.personneId,
            service: admin.service,
        }
        return dto;
    }

    static mapToAdminDto(person: PersonneDAO, admin: AdminDAO): AdminPersonDTO | null{
        if (admin === null) return null;
        const dto: AdminPersonDTO = {
            personneId: admin.personneId,
            personneNom: person.personneNom,
            personnePrenom: person.personnePrenom,
            email: person.email,
            service: admin.service,
        }
        return dto;
    }

}