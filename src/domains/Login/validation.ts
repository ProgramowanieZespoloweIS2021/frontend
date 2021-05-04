import * as yup from 'yup';

import { email } from '@utils/validation';

export const schema = yup.object().shape({
    email: email,
    password: yup.string().required('Password is required'),
});
