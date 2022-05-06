import { produce } from 'immer';
import type { RootModel } from '.';
import { createModel } from "@rematch/core";
import { PaginationFactory } from '../factory';
import { UserTypes } from '../types';

export interface UserStoreProps {
    user: UserTypes.Model,
    pagination: PaginationFactory<UserTypes.Model>,
    loading: {
        fetchById: boolean,
        fetchMany: boolean,
        destroy: boolean,
        create: boolean,
        update: boolean,
    },
};
export const user = createModel<RootModel>()({
    state: {
        user: {} as UserTypes.Model,
        pagination: {} as PaginationFactory<UserTypes.Model>,
        loading: {
            fetchById: false,
            fetchMany: false,
            destroy: false,
            create: false,
            update: false,
        },
    },
    reducers: {
        toggleLoading: (
            store, prop: keyof UserStoreProps['loading'], v: boolean) => {
                store.loading[prop] = v;
            },
        addUser: 
            (store, user: UserTypes.Model) => {
                store.pagination.items = [user].concat(store.pagination.items);
            },
        updateUser: 
            (store, user: UserTypes.Model) => {
                store.pagination.items = store.pagination.items?.map(i => {
                    if (i.id === user.id) {
                        return user;
                    }
                    return i;
                });
            },
        setUser: 
            (store, user: UserTypes.Model) => {
                store.user = user;
            },
        setPagination: 
            (store, pagination: PaginationFactory<UserTypes.Model>) => {
                store.pagination = pagination;
            },
        destroyUser: 
            (store, id: string) => {
                store.pagination.items = store.pagination.items.filter(i => i.id !== id);
            },
    },
});
