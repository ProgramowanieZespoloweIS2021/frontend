import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid } from '@material-ui/core';

import { Container, Input, Button } from './Form.styled';

interface IRegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must contain at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password must be alphanumerical')
        .matches(/[0-9]/, 'Password must be alphanumerical')
        .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Password is required'),
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data: IRegisterData) => console.log(data);

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        error={!!errors.firstName}
                        helperText={
                            errors.firstName && errors.firstName.message
                        }
                        label="First name"
                        type="text"
                        variant="outlined"
                        {...register('firstName')}
                    />
                    <Input
                        error={!!errors.lastName}
                        helperText={errors.lastName && errors.lastName.message}
                        label="Last name"
                        type="text"
                        variant="outlined"
                        {...register('lastName')}
                    />
                    <Input
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register('email')}
                    />
                    <Input
                        error={!!errors.password}
                        helperText={errors.password && errors.password.message}
                        label="Password"
                        type="password"
                        variant="outlined"
                        {...register('password')}
                    />
                    <Input
                        error={!!errors.confirmPassword}
                        helperText={
                            errors.confirmPassword &&
                            errors.confirmPassword.message
                        }
                        label="Confirm password"
                        type="password"
                        variant="outlined"
                        {...register('confirmPassword')}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Create account
                    </Button>
                </form>
            </Grid>
        </Container>
    );
};

export default Form;
