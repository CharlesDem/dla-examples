import { DataTypes, InferAttributes, Model } from "sequelize";
import sequelize from "../../core/database/sequelize";
import { Personne } from "../personne.model";

export class PersonneDAO extends Model<InferAttributes<PersonneDAO>> implements Personne {
  personneId?: number
  personneNom: string
  personnePrenom: string
  email: string
}

PersonneDAO.init({
  personneId: {
    type: DataTypes.INTEGER,
    field: 'personne_id',
    autoIncrement: true,
    primaryKey: true
  },
  personneNom: {
    type: DataTypes.STRING(50), //INFO ici on fixe la taille max en BDD à 50
    field: 'personne_nom',
    allowNull: false,
    validate: {
      len: [0,50], //INFO ici sequelize fera un check avant de contacter la BDD
    }
  },
  personnePrenom: {
    type: DataTypes.STRING(50),
    field: 'personne_prenom',
    allowNull: false,
    validate: {
      len: [0,50]
    }
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isEmail: true, //INFO built-in validator pour sequelize https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
      len: [0,50]
    }
  }
}, {
  sequelize,
  modelName: 'personne',
  timestamps: false,
  freezeTableName: true
});



