export interface IRepository<T> {

    findById(id: number): Promise<T | null>;
    findAll(options? : any): Promise<T[]>;
    delete(id: number): Promise<boolean>;

}

export interface IRepositoryCreate<T> {
    create(t: T): Promise<T>;

}

export interface IRepositoryCommon<T> extends IRepository<T>, IRepositoryCreate<T> {}