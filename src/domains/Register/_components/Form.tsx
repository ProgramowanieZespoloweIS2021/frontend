import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';
import { Container, Input, Button } from './Form.styled';
import { createUser } from '@state/_redux/user/actions';
import { schema } from '@domains/Register/validation';
import { IRegisterData } from '@domains/Register/types';

const Form = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: IRegisterData) => {
        dispatch(createUser.request(data));
    };

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
                    <Button variant="outlined" color="primary" type="submit">
                        Create account
                    </Button>
                </form>
            </Grid>
        </Container>
    );
};

export default Form;
