import { Transaction } from "sequelize"

/**
 * Cette classe permet de mocker les transactions sans accès en db
 */
export class Mocktransaction extends Transaction {

    public async commit(): Promise<void> {
        console.log("com")
        return
    }

  
    public async rollback(): Promise<void> {
        console.log("roll")
        return

    }

}