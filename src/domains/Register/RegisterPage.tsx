import React from 'react';
import { useHistory } from 'react-router';
import { Grid } from '@material-ui/core';
import Form from './_components/Form';
import { SectionContainer } from '@components/_form-elements/SectionContainer';

interface IProps {}

const RegisterPage: React.FC<IProps> = () => {
    const history = useHistory();

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={6}>
                    <SectionContainer>
                        <Form />
                    </SectionContainer>
                </Grid>
            </Grid>
        </>
    );
};

export default RegisterPage;
