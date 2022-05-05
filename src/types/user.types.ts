export namespace UserTypes {
    export interface Model {
        id: string,
        firstName: string,
        email: string,
        
        createdAt?: string,
        updatedAt?: string,
        deleted: boolean,
    }
}