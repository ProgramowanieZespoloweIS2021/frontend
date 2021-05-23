import React from 'react';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';
import {
    Container,
    RegisterHeader,
    Divider,
    InfoText,
    LoginWrapper,
    Button,
    Wrapper,
} from './RegisterPage.styled';
import Form from './_components/Form';
import paths from '@shared/paths';

interface IProps {}

const RegisterPage: React.FC<IProps> = () => {
    const history = useHistory();

    const handleLoginButton = () => {
        history.push(paths.login);
    };

    return (
        <>
            <Wrapper container justify="center" alignItems="center" spacing={4}>
                <Grid item sm={6} md={3} xs={12}>
                    <Container elevation={2}>
                        <RegisterHeader>Register</RegisterHeader>
                        <Form />
                        <Divider />
                        <LoginWrapper>
                            <InfoText>Do you already have account?</InfoText>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleLoginButton}
                            >
                                Login
                            </Button>
                        </LoginWrapper>
                    </Container>
                </Grid>
            </Wrapper>
        </>
    );
};

export default RegisterPage;
