import React from 'react';
import { Box, Button, Container, Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MainSubtitle, MainTitle } from './LandingPage.styled';
import { ShowcaseImage } from '@shared/svgs/ShowcaseImage';

interface IProps {}

const LandingPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <Box mt={8} p={4}>
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justify="center"
                    >
                        <Grid item xs={6}>
                            <MainTitle>Professional IT Products</MainTitle>
                            <MainSubtitle>
                                Do you need app, website or design? Hire the
                                best developers and let them make it for you.
                            </MainSubtitle>
                            <Box display="flex" flexDirection="row" mt={4}>
                                <Box mr={4}>
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
                            <Box display="flex" justifyContent="center">
                                <ShowcaseImage width={500} height={400} />
                            </Box>
                        </Grid>
                        <Box mt={20}>
                            <IconButton color="primary">
                                <ExpandMoreIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default LandingPage;
