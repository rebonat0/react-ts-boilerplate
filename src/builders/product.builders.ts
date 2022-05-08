import { InputForm } from "../types";

export const PRODUCT_COLUMNS = [
    {
        field: 'name',
        headerName: 'Nome',
        width: 250,
    },
    {
        field: 'price',
        headerName: 'Preço',
        width: 250,
    },
];

export const PRODUCT_FORM_INPUTS: InputForm[] = [
    {
        label: 'Nome',
        id: 'name',
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
        label: 'Preço',
        id: 'price',
        type: 'number',
        required: true,
        placeholder: 'Preço',
        grid: {
            sm: 12,
            md: 12,
            lb: 12,
        },
    },
];