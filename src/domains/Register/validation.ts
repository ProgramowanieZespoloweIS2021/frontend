import * as yup from 'yup';

import {
    password,
    firstName,
    lastName,
    email,
    confirmPassword,
} from '@utils/validation';

export const schema = yup.object().shape({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword('password'),
});
