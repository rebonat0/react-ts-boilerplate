import { AxiosError, AxiosResponse } from 'axios';
import { RESPONSE_CODES } from '../constants/responseCodes.constants';
import { api } from '../http';
import { store } from '../store';
import { DefaultRes, UserTypes } from '../types';
import { PaginatorFactory, PaginationFactory } from '../factory';

export class UserService {
    public static readonly dispatch = store.dispatch.user;

    public static async fetchById(
        id: string, 
        callback?: (err?: boolean, message?: string) => void,
    ){
        const { dispatch: { toggleLoading, setUser } } = UserService;

        try {
            toggleLoading('fetchById', true);

            const { data: { result, isValid, message }} = await api.get<
                DefaultRes<UserTypes.Model>,
                AxiosResponse<DefaultRes<UserTypes.Model>>
            >(`/user/${id}`);

            toggleLoading('fetchById', false);
            
            setUser(result);

            return callback && callback(isValid, RESPONSE_CODES[message]);
        } catch (error: any) {
            toggleLoading('fetchById', false);
            if (error.response) {
                const ERROR_CODE = (error as AxiosError<
                    DefaultRes<UserTypes.Model>
                >).response?.data?.message;

                return callback && callback(true, RESPONSE_CODES[ERROR_CODE!]);
            }
            return callback && callback(true, String(error));
        }
    }

    public static async fetchMany(
        dto: PaginatorFactory<Omit<UserTypes.Model, 'id'>>,
        callback?: (err?: boolean, message?: string) => void,
    ): Promise<PaginationFactory<UserTypes.Model> | void> {
        const { dispatch: { toggleLoading, setPagination } } = UserService;

        try {
            toggleLoading('fetchMany', true);

            const { data: { result: { items, page, perPage, total }, isValid, message }} = await api.get<
                DefaultRes<PaginationFactory<UserTypes.Model>>,
                AxiosResponse<DefaultRes<PaginationFactory<UserTypes.Model>>>
            >(`/user?perPage=${dto.perPage}&page=${dto?.page}`);

            toggleLoading('fetchMany', false);

            setPagination({ items, page, perPage, total });

            callback && callback(isValid, RESPONSE_CODES[message]);

            return { items, page, perPage, total };
        } catch (error: any) {
            toggleLoading('fetchMany', false);
            if (error.response) {
                const ERROR_CODE = (error as AxiosError<
                    DefaultRes<UserTypes.Model>
                >).response?.data?.message;

                callback && callback(true, RESPONSE_CODES[ERROR_CODE!]);
            }
            callback && callback(true, String(error));
        }
    }

    public static async create(
        dto: UserTypes.Model,
        callback?: (err?: boolean, message?: string) => void,
    ){
        const { dispatch: { toggleLoading, addUser } } = UserService;

        try {
            toggleLoading('create', true);

            const { data: { isValid, message, result }} = await api.post<
                DefaultRes<UserTypes.Model>,
                AxiosResponse<DefaultRes<UserTypes.Model>>
            >(`/user`, dto);

            toggleLoading('create', false);
            
            addUser(dto);

            return callback && callback(isValid, RESPONSE_CODES[message]);
        } catch (error: any) {
            toggleLoading('create', false);
            if (error.response) {
                const ERROR_CODE = (error as AxiosError<
                    DefaultRes<UserTypes.Model>
                >).response?.data?.message;

                return callback && callback(true, RESPONSE_CODES[ERROR_CODE!]);
            }
            return callback && callback(true, String(error));
        }
    }

    public static async update(
        id: string, 
        dto: UserTypes.Model,
        callback?: (err?: boolean, message?: string) => void,
    ){
        const { dispatch: { toggleLoading, updateUser } } = UserService;

        try {
            toggleLoading('update', true);

            const { data: { isValid, message, result }} = await api.put<
                DefaultRes<UserTypes.Model>,
                AxiosResponse<DefaultRes<UserTypes.Model>>
            >(`/user/${id}`, dto);

            toggleLoading('update', false);
            
            updateUser(result);

            return callback && callback(isValid, RESPONSE_CODES[message]);
        } catch (error: any) {
            toggleLoading('update', false);
            if (error.response) {
                const ERROR_CODE = (error as AxiosError<
                    DefaultRes<UserTypes.Model>
                >).response?.data?.message;

                return callback && callback(true, RESPONSE_CODES[ERROR_CODE!]);
            }
            return callback && callback(true, String(error));
        }
    }

    public static async destroy(
        id: string, 
        callback?: (err?: boolean, message?: string) => void,
    ){
        const { dispatch: { toggleLoading, destroyUser } } = UserService;

        try {
            toggleLoading('destroy', true);

            const { data: { isValid, message }} = await api.delete<
                DefaultRes<UserTypes.Model>,
                AxiosResponse<DefaultRes<UserTypes.Model>>
            >(`/user/${id}`);

            toggleLoading('destroy', false);
            
            destroyUser(id);

            return callback && callback(isValid, RESPONSE_CODES[message]);
        } catch (error: any) {
            toggleLoading('fetchById', false);
            if (error.response) {
                const ERROR_CODE = (error as AxiosError<
                    DefaultRes<UserTypes.Model>
                >).response?.data?.message;

                return callback && callback(true, RESPONSE_CODES[ERROR_CODE!]);
            }
            return callback && callback(true, String(error));
        }
    }
}