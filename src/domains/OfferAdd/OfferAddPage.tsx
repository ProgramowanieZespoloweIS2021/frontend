import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Form from '@domains/OfferAdd/_components/Form';

interface IProps {}

const OfferAddPage: React.FC<IProps> = () => {
    return (
        <Grid container justify="center" spacing={4}>
            <Box pl={10} pr={10}>
                <Form />
            </Box>
        </Grid>
    );
};

export default OfferAddPage;
