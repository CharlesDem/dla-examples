
export interface Admin { //INFO cette interface est créée pour strictement séparer le model de donnée de sequelize (dans les faits, sur beaucoup de projet, on les gardera en commun pour plus de simplicité)
  personneId?: number,
  service: string
}




