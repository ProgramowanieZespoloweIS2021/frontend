import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid } from '@material-ui/core';

import { Container, Button, Input } from './ChangePasswordForm.styled';
import { changePasswordSchema } from '@domains/Account/validation';
import { IChangePasswordData } from '@domains/Login/types';

interface IProps {}

const ChangePasswordForm: React.FC<IProps> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(changePasswordSchema) });

    const onSubmit = (data: IChangePasswordData) => console.log(data);

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        error={!!errors.oldPassword}
                        helperText={
                            errors.oldPassword && errors.oldPassword.message
                        }
                        id="account-old-password-input"
                        label="Current password"
                        type="password"
                        variant="outlined"
                        {...register('oldPassword')}
                    />
                    <Input
                        error={!!errors.newPassword}
                        helperText={
                            errors.newPassword && errors.newPassword.message
                        }
                        id="account-new-password-input"
                        label="New password"
                        type="password"
                        variant="outlined"
                        {...register('newPassword')}
                    />
                    <Input
                        error={!!errors.confirmPassword}
                        helperText={
                            errors.confirmPassword &&
                            errors.confirmPassword.message
                        }
                        id="account-confirm-password-input"
                        label="Confirm new password"
                        type="password"
                        variant="outlined"
                        {...register('confirmPassword')}
                    />
                    <Button variant="outlined" color="primary" type="submit">
                        Update
                    </Button>
                </form>
            </Grid>
        </Container>
    );
};

export default ChangePasswordForm;
