import * as yup from 'yup';

export const offersFormValidation = yup.object().shape({
    sortDirection: yup.object().required('Select sort direction'),
    sortField: yup.object().required('Select filter field'),
    min: yup.number().required('Select min price'),
    max: yup.number().required('Select max price'),
    tags: yup.array().min(1, 'Add at least one tag').required(),
});
