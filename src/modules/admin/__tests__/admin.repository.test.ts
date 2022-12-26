import { Transaction } from "sequelize";
import sequelize from "../../../sequelize";
import { Person } from "../../person/person.model";
import { Admin } from "../admin.model";
import { AdminRepository } from "../admin.repository";


describe('AdminRepository', () => {

    let t: jest.SpyInstance<Transaction>;

    beforeAll(() => {
     //   let r = jest.spyOn(Transaction, 'commit')
    })

//INFO (NAME*): <message>


    beforeEach(() => {
        jest.resetAllMocks();
    });
//INFO here looks
    describe('AdminRepository.create', () => {
        it('should return admin create detail', async () => {
            const dto = {
                personneNom: 'Roger',
                personnePrenom: 'Bob',
                service: 'compta'
            }
            
            const mockPersonResponse = {
                personId: 1,
                personneNom: 'Roger',
                personnePrenom: 'Bob',
            }

            const adminResponse = {
                personId: 1,
                service: 'compta'
            }

            const expected = {
                personId: 1,
                personneNom: 'Roger',
                personnePrenom: 'Bob',
                service: 'compta'
            }

            

            const repo = new AdminRepository()
            Person.create = jest.fn().mockResolvedValue(mockPersonResponse)
            Admin.create = jest.fn().mockResolvedValue(adminResponse);


            let e = sequelize.transaction()
            

        //    expect(t.).toHaveBeenCalled
            

         //   expect(t.)
        
        //    let spy = jest.spyOn(sequelize, 'transaction').mockImplementation(()=> {

    //        });
        
            
            
//spy.mockImplementation('commit', {()=> console.log('commit')})

            //act
            const result = await repo.create(dto);

            //assert
            expect(result).toEqual(expected);
            expect(Person.create).toHaveBeenCalledTimes(1);  
            
        });
    });
});