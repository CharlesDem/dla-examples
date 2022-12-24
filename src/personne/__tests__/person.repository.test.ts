import { PersonneDAO } from "../data/personne.dao";
import { PersonRepository } from "../data/personne.repository";

describe('PersonRepository', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('PersonRepository.__findById', () => {
        it('should return person detail', async () => {
            const id = 1;
            
            const mockResponse = {
                personneId: 1,
                personneNom: 'Doe',
                personnePrenom: 'John',
            }

            const expected = {
                personneNom: 'Doe',
                personnePrenom: 'John'
            }

            const repo = new PersonRepository()
            PersonneDAO.findOne = jest.fn().mockResolvedValue(mockResponse);

            //act
            const result = await repo.findById(id);

            //assert
            expect(result).toEqual(expected);
            expect(PersonneDAO.findOne).toHaveBeenCalledTimes(1);
            expect(PersonneDAO.findOne).toBeCalledWith({
                where: {
                    personneId: id
                }
            });
        });
    });
});