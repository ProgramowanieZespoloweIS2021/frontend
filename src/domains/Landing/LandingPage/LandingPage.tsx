import React from 'react';
import { Box, Button } from '@material-ui/core';

interface IProps { }

const LandingPage: React.FC<IProps> = () => {
    return (
        <>
            <Box m={4}>
                <Button color='primary'>Hello Landing page</Button>
            </Box>
        </>
    );
};

export default LandingPage;

