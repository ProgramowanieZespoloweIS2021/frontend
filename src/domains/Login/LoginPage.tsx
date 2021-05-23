import React from 'react';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';
import Form from './_components/Form';
import { InfoText, Button } from './LoginPage.styled';
import paths from '@shared/paths';
import { SectionContainer } from '@components/_form-elements/SectionContainer';

interface IProps {}

const LoginPage: React.FC<IProps> = () => {
    const history = useHistory();

    const handleRegisterButton = () => {
        history.push(paths.register);
    };

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={6}>
                    <SectionContainer>
                        <Form />
                    </SectionContainer>
                </Grid>
                <Grid item sm={6}>
                    <SectionContainer>
                        <InfoText>If you are new here</InfoText>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleRegisterButton}
                        >
                            Create account
                        </Button>
                    </SectionContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default LoginPage;
