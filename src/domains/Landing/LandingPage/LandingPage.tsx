import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { Box, Button, Container, Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OffersList from '../OffersList/OffersList';
import { MainSubtitle, MainTitle } from './LandingPage.styled';

import { ShowcaseImage } from '@shared/svgs/ShowcaseImage';
import paths from '@shared/paths';
import { isAuthorized } from '@state/_redux/user/selectors';

interface IProps {}

const LandingPage: React.FC<IProps> = () => {
    const history = useHistory();
    const isUserAuthorized = useSelector(isAuthorized);

    const handleLoginButton = () => {
        history.push(paths.login);
    };

    const handleRegisterButton = () => {
        history.push(paths.register);
    };

    const handleAddOfferButton = () => {
        history.push(paths.offerAdd);
    };

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
                            {!isUserAuthorized && (
                                <Box display="flex" flexDirection="row" mt={4}>
                                    <Box mr={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleLoginButton}
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleRegisterButton}
                                        >
                                            Register
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                            {isUserAuthorized && (
                                <Box display="flex" flexDirection="row" mt={4}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleAddOfferButton}
                                    >
                                        Add offer
                                    </Button>
                                </Box>
                            )}
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
                <OffersList />
            </Container>
        </>
    );
};

export default LandingPage;
