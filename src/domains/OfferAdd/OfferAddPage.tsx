import React from 'react';
import { Box, Grid } from '@material-ui/core';
import {
    IAddOfferForm,
    OfferForm,
} from '@components/_form-elements/OfferForm/OfferForm';
import { createOffer } from '@state/_redux/offers/actions';
import { offerFormToModel } from '@components/_form-elements/OfferForm/helpers';
import { useDispatch } from 'react-redux';

interface IProps {}

const OfferAddPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();

    const onSubmit = (data: IAddOfferForm) => {
        dispatch(createOffer.request(offerFormToModel(data)));
    };

    return (
        <Grid container justify="center" spacing={4}>
            <Box pl={10} pr={10}>
                <OfferForm {...{ onSubmit }} />
            </Box>
        </Grid>
    );
};

export default OfferAddPage;
