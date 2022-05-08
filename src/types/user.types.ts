export namespace UserTypes {
    export interface Model {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        createdAt?: Date,
        updatedAt?: Date,
        deleted?: boolean,
    }
}