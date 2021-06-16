import * as yup from 'yup';

export const paymentFormValidation = yup.object().shape({
    email: yup.string().required(),
    name: yup.string().required(),
    surname: yup.string().required(),
    cardNumber: yup.string().required().length(16),
    expirationDate: yup.string().required(),
    codeCvv: yup.string().required().length(3),
});
