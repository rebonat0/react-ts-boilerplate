import { RESPONSE_CODES } from '../constants/responseCodes.constants';

// export_types
export * from './user.types';

export type PossibleMessages = keyof typeof RESPONSE_CODES;

export interface DefaultRes<T = any> {
    result: T;
    message: PossibleMessages;
    isValid: boolean;
}
