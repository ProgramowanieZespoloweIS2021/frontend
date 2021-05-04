import { IChangeUserDetailsData } from '@domains/Account/types';
import * as yup from 'yup';

import { firstName, lastName, password, confirmPassword } from '@utils/validation';

export const changeUserDetailsSchema = (data: IChangeUserDetailsData) =>
    yup.object().shape({
        firstName: firstName.default(data.firstName),
        lastName: lastName.default(data.lastName),
    });

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup.string().required(),
    newPassword: password,
    confirmPassword: confirmPassword('newPassword'),
});
