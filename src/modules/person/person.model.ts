import { DataTypes, InferAttributes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Person extends Model<InferAttributes<Person>> {
  personId?: number
  personNom: string
  personPrenom: string
}

Person.init({
  personId: {
    type: DataTypes.INTEGER,
    field: 'personne_id',
    autoIncrement: true,
    primaryKey: true
  },
  personNom: {
    type: DataTypes.STRING,
    field: 'personne_nom',
    allowNull: false
  },
  personPrenom: {
    type: DataTypes.STRING,
    field: 'personne_prenom',
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'personne',
  timestamps: false,
  freezeTableName: true
});



