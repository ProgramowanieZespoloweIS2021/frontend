import React from 'react';

import { Grid } from '@material-ui/core';

import { LoginHeader, Wrapper } from './AccountPage.styled';
import ChangePasswordForm from './_components/ChangePasswordForm';
import ChangeUserDetailsForm from './_components/ChangeUserDetailsForm';
import { SectionContainer } from '@components/_form-elements/SectionContainer';

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
                <Grid item xl={6}>
                    <SectionContainer>
                        <LoginHeader>Edit account</LoginHeader>
                        <ChangeUserDetailsForm {...USER} />
                    </SectionContainer>
                </Grid>
                <Grid item xl={6}>
                    <SectionContainer>
                        <LoginHeader>Change password</LoginHeader>
                        <ChangePasswordForm />
                    </SectionContainer>
                </Grid>
            </Wrapper>
        </>
    );
};

export default AccountPage;
