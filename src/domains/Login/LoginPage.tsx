import React from 'react';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';
import Form from './_components/Form';
import {
    Container,
    LoginHeader,
    Divider,
    InfoText,
    RegisterWrapper,
    Button,
} from './LoginPage.styled';
import paths from '@shared/paths';

interface IProps {}

const LoginPage: React.FC<IProps> = () => {
    const history = useHistory();

    const handleRegisterButton = () => {
        history.push(paths.register);
    };

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={6} md={3} xs={12}>
                    <Container elevation={2}>
                        <LoginHeader>Login</LoginHeader>
                        <Form />
                        <Divider />
                        <RegisterWrapper>
                            <InfoText>If you are new here</InfoText>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleRegisterButton}
                            >
                                Create account
                            </Button>
                        </RegisterWrapper>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default LoginPage;
