import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Grid } from '@material-ui/core';

import { Container, Button, Input } from './Form.styled';

import { loginUser } from '@state/_redux/user/actions';
import paths from '@shared/paths';
import { schema } from '@domains/Login/validation';
import { ILoginData } from '@domains/Login/types';

interface IProps {}

const Form: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: ILoginData) => {
        if (await dispatch(loginUser.request(data))) {
        }
    };

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                        id="login-email-input"
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...register('email')}
                    />
                    <Input
                        error={!!errors.password}
                        helperText={errors.password && errors.password.message}
                        id="login-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        {...register('password')}
                    />
                    <Button variant="outlined" color="primary" type="submit">
                        Sign in
                    </Button>
                </form>
                <Button variant="text" color="primary">
                    Forgot password?
                </Button>
            </Grid>
        </Container>
    );
};

export default Form;
