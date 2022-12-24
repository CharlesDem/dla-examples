export interface AdminPersonDTO {
    personneId?: number
    personneNom: string
    personnePrenom: string
    email: string
    service: string
}

export interface AdminDTO {
    personneId?: number,
    service: string
}

export interface AdminFilterDto {
    service: string
}
