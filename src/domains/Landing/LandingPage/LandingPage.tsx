import React from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { MainSubtitle, MainTitle } from './LandingPage.styled';
import { ShowcaseImage } from '@shared/svgs/ShowcaseImage';

interface IProps {}

const LandingPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <Box mt={5}>
                    <Grid container direction="row" justify="center">
                        <Grid item xs={6}>
                            <MainTitle>Professional IT Products</MainTitle>
                            <MainSubtitle>
                                Do you need app, website or design? Hire the
                                best developers and let them make it for you.
                            </MainSubtitle>
                            <Box display="flex" flexDirection="row" mt={4}>
                                <Box mr={3}>
                                    <Button variant="contained" color="primary">
                                        Login
                                    </Button>
                                </Box>
                                <Box>
                                    <Button variant="contained" color="primary">
                                        Register
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <ShowcaseImage width={600} height={400} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default LandingPage;
