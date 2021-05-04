import React from 'react';

import { Grid } from '@material-ui/core';

import { Container, LoginHeader } from './AccountPage.styled';
import ChangePasswordForm from './_components/ChangePasswordForm';
import ChangeUserDetailsForm from './_components/ChangeUserDetailsForm';

import { useProtectedRoute } from '@utils/hooks/useProtectedRoute';

interface IProps {}

const USER = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
};

const AccountPage: React.FC<IProps> = () => {
    useProtectedRoute();

    return (
        <>
            <Grid container justify="center" alignItems="center" spacing={4}>
                <Grid item sm={8} md={8} xs={12}>
                    <Container elevation={2}>
                        <LoginHeader>My account</LoginHeader>
                        <ChangeUserDetailsForm {...USER} />
                    </Container>
                    <Container elevation={2}>
                        <LoginHeader>Change password</LoginHeader>
                        <ChangePasswordForm />
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default AccountPage;
