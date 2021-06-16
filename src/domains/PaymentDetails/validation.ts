import * as yup from 'yup';

export const paymentFormValidation = yup.object().shape({
    email: yup.string().required(),
    name: yup.string().required(),
    surname: yup.string().required(),
    cardNumber: yup.string().required().length(16),
    expirationDateMonth: yup.string().required().length(2),
    expirationDateYear: yup.string().required().length(2),
    codeCvv: yup.string().required().length(3),
});
