import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Admin extends Model {
  personId?: number
  service: string
}

Admin.init({
  personnne_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
   // field: 'personId',
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



