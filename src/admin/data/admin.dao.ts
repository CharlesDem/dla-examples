import { Model, InferAttributes, DataTypes } from "sequelize";
import sequelize from "../../core/database/sequelize";
import { Admin } from "../admin.model";

export class AdminDAO extends Model<InferAttributes<AdminDAO>> implements Admin{
    personneId?: number;
    service: string;
  
  }
  
  AdminDAO.init({
    personneId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'personne_id',
    },
    service: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isIn: [['Compta', 'RH', 'Support']] // doit faire partie de ces valeurs ou casser
      }
    }
  }, {
    sequelize,
    modelName: 'admin',
    timestamps: false,
    freezeTableName: true
  });
  