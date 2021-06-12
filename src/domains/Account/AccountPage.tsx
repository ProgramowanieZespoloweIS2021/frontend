import React from 'react';

import { LoginHeader, Wrapper, Item } from './AccountPage.styled';
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
            <Wrapper>
                <Item>
                    <SectionContainer>
                        <LoginHeader>Edit account</LoginHeader>
                        <ChangeUserDetailsForm {...USER} />
                    </SectionContainer>
                </Item>
                <Item>
                    <SectionContainer>
                        <LoginHeader>Change password</LoginHeader>
                        <ChangePasswordForm />
                    </SectionContainer>
                </Item>
            </Wrapper>
        </>
    );
};

export default AccountPage;
