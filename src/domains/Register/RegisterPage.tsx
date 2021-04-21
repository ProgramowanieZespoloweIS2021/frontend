import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, RegisterHeader } from './RegisterPage.styled';
import Form from './_components/Form';

interface IProps {}

const RegisterPage: React.FC<IProps> = () => (
    <>
        <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item sm={6} md={3} xs={12}>
                <Container elevation={2}>
                    <RegisterHeader>Register</RegisterHeader>
                    <Form />
                </Container>
            </Grid>
        </Grid>
    </>
);

export default RegisterPage;
