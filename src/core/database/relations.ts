import { AdminDAO } from "~/admin/data/admin.dao";
import { PersonneDAO } from "../../personne/data/personne.dao";

export const relations = ()=> {
   
PersonneDAO.hasOne(AdminDAO , { foreignKey: 'personne_id', onDelete: 'cascade', hooks: true})
AdminDAO.belongsTo(PersonneDAO, { foreignKey: 'personne_id', onDelete: 'cascade', hooks: true})

}
