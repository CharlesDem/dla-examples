export interface AdminDTO {
    personId?: number
    personneNom: string
    personnePrenom: string
    service: string
}

export interface AdminOnlyDTO {
    personId?: number,
    service: string
}
