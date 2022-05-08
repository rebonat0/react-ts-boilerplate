import { InputForm } from "../types";

export const USER_COLUMNS = [
    {
        field: 'firstName',
        headerName: 'Nome',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Sobrenome',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
];

export const USER_FORM_INPUTS: InputForm[] = [
    {
        label: 'Nome',
        id: 'firstName',
        type: 'text',
        required: true,
        placeholder: 'Nome',
        grid: {
            sm: 12,
            md: 12,
            lb: 12,
        },
    },
    {
        label: 'Sobrenome',
        id: 'lastName',
        type: 'text',
        required: true,
        placeholder: 'Sobrenome',
        grid: {
            sm: 12,
            md: 12,
            lb: 12,
        },
    },
    {
        label: 'Email',
        id: 'email',
        type: 'text',
        required: true,
        placeholder: 'Email',
        grid: {
            sm: 12,
            md: 12,
            lb: 12,
        },
    },
];