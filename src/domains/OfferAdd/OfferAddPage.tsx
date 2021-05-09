import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Form from '@domains/OfferAdd/_components/Form';
import { OfferAddHeader } from './OfferAddPage.styled';

interface IProps {}

const OfferAddPage: React.FC<IProps> = () => {
    return (
        <Grid container justify="center" spacing={4}>
            <Box p={10}>
                <OfferAddHeader>Add offer</OfferAddHeader>
                <Form />
            </Box>
        </Grid>
    );
};

export default OfferAddPage;
