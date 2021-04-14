import React from 'react';
import { Grid } from '@material-ui/core';
import * as styled from './RegisterPage.styled';
import Form from './_components/Form';

interface IProps {}

const RegisterPage: React.FC<IProps> = () => (
    <>
        <Grid container justify="center" spacing={4}>
            <Grid item sm={6} md={4} xs={12}>
                <styled.Container elevation={2}>
                    <styled.LoginHeader>Register</styled.LoginHeader>
                    <Form />
                </styled.Container>
            </Grid>
        </Grid>
    </>
);

export default RegisterPage;
