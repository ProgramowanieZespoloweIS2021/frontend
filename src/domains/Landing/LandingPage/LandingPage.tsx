import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { MainSubtitle, MainTitle } from './LandingPage.styled';

interface IProps {}

const LandingPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <MainTitle>Professional IT Products</MainTitle>
                        <MainSubtitle>
                            Do you need app, website or design? Hire the best
                            developers and let them make it for you.
                        </MainSubtitle>
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                        <Button variant="contained">Register</Button>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Container>
        </>
    );
};

export default LandingPage;
