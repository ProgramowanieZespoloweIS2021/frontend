import React from 'react';
import { Grid } from '@material-ui/core';
import * as styled from './LoginPage.styled';
import Form from './_components/Form';

interface IProps {}

const LoginPage: React.FC<IProps> = () => (
    <>
        <Grid container justify="center">
            <Grid item sm={6} md={4} xs={12}>
                <styled.Container elevation={2}>
                    <styled.LoginHeader>Login</styled.LoginHeader>
                    <Form />
                </styled.Container>
            </Grid>
        </Grid>
    </>
);

export default LoginPage;
