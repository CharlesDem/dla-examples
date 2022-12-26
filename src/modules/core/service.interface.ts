export interface IService<T> {
    findById(id: number): Promise<T | null>;
    findAll(options?: any): Promise<T[]>;
    delete(id: number): Promise<boolean>;
}

export interface IServiceCreate<T> {
    create(t: T): Promise<T>
}

export interface IserviceCommon<T> extends IService<T>, IServiceCreate<T> {

}