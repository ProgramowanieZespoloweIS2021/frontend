import * as yup from 'yup';

export const password = yup
    .string()
    .min(8, 'Password must contain at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must be alphanumerical')
    .matches(/[0-9]/, 'Password must be alphanumerical')
    .required('Password is required');
export const firstName = yup.string().required('First name is required');
export const lastName = yup.string().required('First name is required');
export const email = yup.string().email().required('Email is required');
export const confirmPassword = (field: string) =>
    yup
        .string()
        .oneOf([yup.ref(field), null], 'Passwords must match')
        .required('Password is required');
