export interface IRepository<T> {

    findById(id: number): Promise<T>;
    findAll(options? : any): Promise<T[]>;
    delete(id: number): Promise<boolean>;
    update(t: T): Promise<T>

}

export interface IRepositoryCreate<T> {
    create(t: T): Promise<T>;

}

export interface IRepositoryCommon<T> extends IRepository<T>, IRepositoryCreate<T> {}