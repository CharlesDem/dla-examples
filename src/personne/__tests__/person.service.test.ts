import { IRepository } from "~/core/respository.interface";
import { PersonRepository } from "../data/personne.repository";
import { PersonService } from "../personne.service";

jest.mock('~/personne/data/personne.repository')

 describe('PersonService', () => {

    describe('PersonService.__findById', () => {
        it('should return modified data', async () => {
            const id = 1;

            const repoResult = {
                personneId: 1,
                personneNom: 'Doe',
                personnePrenom: 'John',
                email: "john.doe@gmail.co"
            }

            const expected = {
                personneId: 1,
                personneNom: "M. Doe",
                personnePrenom: "John",
                email: "john.doe@gmail.co"
            }

            const repo = new PersonRepository();
            repo.findById = jest.fn().mockResolvedValue(repoResult)
            const service = new PersonService(repo);

            //act
            const result = await service.findById(id);

            //assert
            expect(result).toEqual(expected);
        });
    });

 });