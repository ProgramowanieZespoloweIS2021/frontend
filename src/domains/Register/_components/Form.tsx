import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Grid, FormControlLabel } from '@material-ui/core';

import { Container, Checkbox, Input, Button } from './Form.styled';

interface IRegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: IRegisterData) => console.log(data);

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="First name"
                        type="text"
                        {...register('firstName', { required: true })}
                    />
                    <Input
                        label="Last name"
                        type="text"
                        {...register('lastName', { required: true })}
                    />
                    <Input
                        label="Email"
                        type="email"
                        {...register('email', { required: true })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <Input
                        label="Confirm password"
                        type="password"
                        {...register('confirmPassword', { required: true })}
                    />
                    <FormControlLabel
                        label="I agree to Terms and Privacy Policy."
                        control={
                            <Controller
                                name="termsAgreement"
                                control={control}
                                defaultValue={false}
                                rules={{ required: true }}
                                render={({ field }) => <Checkbox {...field} />}
                            />
                        }
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
