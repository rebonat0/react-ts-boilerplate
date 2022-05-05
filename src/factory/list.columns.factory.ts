import { GridColumns } from '@mui/x-data-grid';
import { keys } from 'ts-transformer-keys';

export class ListColumnsFactory<T extends object> {
    private readonly keys: string[];

    constructor(object: T) {
        this.keys = Object.keys(object).filter(k => k !== 'deleted' && k !== 'id' && k != 'deletedAt');
    }

    public generate() {
        return this.keys?.map(key => ({
            field: key as string,
            headerName: key as string,
            width: 220,
        }));
    }
}