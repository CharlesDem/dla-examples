export interface IService<T> {

    findById(id: number): Promise<T | null>;
    findAll(options?: any): Promise<T[]>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean>;

}