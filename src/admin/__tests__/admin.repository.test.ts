import { Sequelize, Transaction } from "sequelize";
import { NotFoundError } from "~/core/errors/errors";
import sequelize from "../../core/database/sequelize";
import { PersonneDAO } from "../../personne/data/personne.dao";
import { AdminDAO } from "../data/admin.dao";
import { AdminRepository } from "../data/admin.repository";
import { AdminDTO } from "../dto/admin.dto";
import { Mocktransaction } from "./mock.transaction";

jest.mock('sequelize')
const m = jest.mocked(sequelize);

jest.mock('./mock.transaction')

describe('AdminRepository', () => {


    beforeAll(async () => {
    })



    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('AdminRepository.findById', () => {

        it('should find admin detail', async () => {
            const id = 1;

            const dbResult = {
                personneId: 1,
                service: 'Compta'
            }

            const expected = {
                personneId: 1,
                service: 'Compta'
            }

            AdminDAO.findByPk = jest.fn().mockResolvedValue(dbResult);
            const repo = new AdminRepository();

            const result = await repo.findById(id);

            expect(result).toEqual(expected);
            expect(AdminDAO.findByPk).toHaveBeenCalledTimes(1);
        });

        it('should return exception when not found', async () => {
            const id = 1

            AdminDAO.findByPk = jest.fn().mockResolvedValue(null) // le model renvoie null...

            const repo = new AdminRepository();

            let result: AdminDTO;
            try {
                result = await repo.findById(id);
                expect(result).rejects.toEqual(new NotFoundError('Not found')); //et on vérifie qu'on retourne bien une erreur not found
                expect(AdminDAO.findByPk).toHaveBeenCalledTimes(1);
            } catch (err) {

            }


        });
    });


    describe('AdminRepository.create', () => {
        const transaction = new Mocktransaction(m, {});
        const spiedCommit = jest.spyOn(Mocktransaction.prototype, 'commit');
        const spiedRollback = jest.spyOn(Mocktransaction.prototype, 'rollback');

        it('should create admin', async () => {
            const spiedTransaction = jest.spyOn(Sequelize.prototype, 'transaction').mockResolvedValue(transaction);

            const dto = {
                personneNom: 'Roger',
                personnePrenom: 'Bob',
                email: 'bob@gmail.com',
                service: 'compta'
            }

            const mockPersonResponse = {
                personneId: 1,
                personneNom: 'Roger',
                personnePrenom: 'Bob',
            }

            const adminResponse = {
                personneId: 1,
                service: 'compta'
            }

            const expected = {
                personneId: 1,
                personneNom: 'Roger',
                personnePrenom: 'Bob',
                service: 'compta'
            }


            const repo = new AdminRepository();
            PersonneDAO.create = jest.fn().mockResolvedValue(mockPersonResponse)
            AdminDAO.create = jest.fn().mockResolvedValue(adminResponse);

            //act
            const result = await repo.create(dto);

            //assert
            expect(AdminDAO.create).toHaveBeenCalledTimes(1); //la fonction de création de l'admin est boien appelé
            expect(PersonneDAO.create).toHaveBeenCalledTimes(1); //la fonction de création de la personne est bien appelée
            expect(spiedCommit).toHaveBeenCalledTimes(1); //on vérifie que le commit de la transaction est appelé
            expect(spiedRollback).toHaveBeenCalledTimes(0); //pas de rollback

            expect(spiedTransaction).toHaveBeenCalledTimes(1); // création de la transaction 
            expect(result).toEqual(expected);

        });

        it('should fail admin creation', async () => {
            const spiedTransaction = jest.spyOn(Sequelize.prototype, 'transaction').mockResolvedValue(transaction);

            const dto = {
                personneNom: 'Roger',
                personnePrenom: 'Bob',
                email: 'bob@gmail.com',
                service: 'compta'
            }


            const adminResponse = {
                personneId: 1,
                service: 'compta'
            }

            const repo = new AdminRepository();

            PersonneDAO.create = jest.fn().mockRejectedValue(new Error('Error db'))
            AdminDAO.create = jest.fn().mockResolvedValue(adminResponse);


            try {
                const result = await repo.create(dto);
            } catch (err) {

            }


            expect(PersonneDAO.create).toHaveBeenCalledTimes(1);
            expect(AdminDAO.create).toHaveBeenCalledTimes(0);
            expect(spiedRollback).toHaveBeenCalledTimes(1); //on vérifie qu'on ait bien un callback
            expect(spiedCommit).toHaveBeenCalledTimes(0);
        });

    });
});
