import { Person } from "../person/person.model";
import { AdminDTO, AdminPersonDTO } from "./admin.dto";
import { Admin } from "./admin.model";

export class AdminMapper {

    static mapToAdminOnlyDto(admin: Admin): AdminDTO {
        const dto: AdminDTO = {
            personId: admin.personId,
            service: admin.service,
        }
        return dto;
    }

    static mapToAdminDto(person: Person, admin: Admin): AdminPersonDTO | null{
        if (admin === null) return null;
        const dto: AdminPersonDTO = {
            personId: admin.personId,
            personneNom: person.personNom,
            personnePrenom: person.personPrenom,
            service: admin.service,
        }
        return dto;
    }

}