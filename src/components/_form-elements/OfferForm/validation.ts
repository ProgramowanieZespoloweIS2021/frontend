import * as yup from 'yup';

//TODO: Add nested validation
export const addOfferFormValidation = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    tags: yup.array().min(1, 'Select at least one tag.').required(),
    thumbnails: yup
        .array()
        .of(
            yup.object().shape({
                url: yup.string().required('enter thumbnail name'),
            }),
        )
        .min(1, 'Type at least one thumbnail.')
        .required(),
    tiers: yup.array().min(1, 'Describe at least one tier.').required(),
});
