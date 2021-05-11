import { ISelectOption } from '@@types/models/SelectOption';
import { SortOrder } from '@@types/models/Sort';
import { SortField } from '@@types/models/Sort';

export const sortDirectionOptions: ISelectOption[] = [
    {
        value: SortOrder.ASC,
        label: 'ascending',
    },
    {
        value: SortOrder.DESC,
        label: 'descending',
    },
];

export const sortFieldOptions: ISelectOption[] = [
    {
        value: SortField.CREATION_TIMESTAMP,
        label: 'creation time',
    },
    {
        value: SortField.LOWEST_PRICE,
        label: 'lowest price',
    },
    {
        value: SortField.TITLE,
        label: 'title',
    },
];
