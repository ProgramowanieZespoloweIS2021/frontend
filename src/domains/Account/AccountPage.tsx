import React from 'react';

import { Grid } from '@material-ui/core';

import { Container, LoginHeader, Wrapper } from './AccountPage.styled';
import ChangePasswordForm from './_components/ChangePasswordForm';
import ChangeUserDetailsForm from './_components/ChangeUserDetailsForm';

interface IProps {}

const USER = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
};

const AccountPage: React.FC<IProps> = () => {
    return (
        <>
            <Wrapper container justify="center" spacing={4}>
                <Grid item sm={8} md={4} xs={12}>
                    <Container elevation={2}>
                        <LoginHeader>My account</LoginHeader>
                        <ChangeUserDetailsForm {...USER} />
                    </Container>
                </Grid>
                <Grid item sm={8} md={4} xs={12}>
                    <Container elevation={2}>
                        <LoginHeader>Change password</LoginHeader>
                        <ChangePasswordForm />
                    </Container>
                </Grid>
            </Wrapper>
        </>
    );
};

export default AccountPage;
