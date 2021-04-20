import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, LoginHeader } from './LoginPage.styled';
import Form from './_components/Form';

interface IProps {}

const LoginPage: React.FC<IProps> = () => (
    <>
        <Grid container justify="center" spacing={4}>
            <Grid item sm={6} md={3} xs={12}>
                <Container elevation={2}>
                    <LoginHeader>Login</LoginHeader>
                    <Form />
                </Container>
            </Grid>
        </Grid>
    </>
);

export default LoginPage;
