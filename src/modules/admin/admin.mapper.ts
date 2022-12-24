import { AdminDTO, AdminOnlyDTO } from "./admin.dto";
import { Admin } from "./admin.model";

export class AdminMapper {

    static mapToDto(admin: Admin | null): AdminOnlyDTO | null {
        if (admin === null) return null;
        const dto: AdminOnlyDTO = {
            service: admin.service,
        }
        return dto;
    }

    static mapToModel() {

    }

}