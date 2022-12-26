import { DataTypes, InferAttributes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Admin extends Model<InferAttributes<Admin>> {
  declare personId?: number
  declare service: string
}

Admin.init({
  personId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'person_id',
    key: 'personId'
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'admin',
  timestamps: false,
  freezeTableName: true
});



