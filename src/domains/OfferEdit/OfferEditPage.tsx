import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import {
    IAddOfferForm,
    OfferForm,
} from '@components/_form-elements/OfferForm/OfferForm';
import {
    createOffer,
    getOfferDetails,
    updateOffer,
} from '@state/_redux/offers/actions';
import {
    offerFormToModel,
    offerModelToForm,
} from '@components/_form-elements/OfferForm/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectOfferDetails } from '@state/_redux/offers/selectors';

interface IProps {}

interface UrlParams {
    id: string;
}

export const OfferEditPage: React.FC<IProps> = () => {
    const { id } = useParams<UrlParams>();
    const offerId = parseInt(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOfferDetails.request(offerId));
    }, []);

    const onSubmit = (data: IAddOfferForm) => {
        dispatch(updateOffer.request(offerFormToModel(data)));
    };

    const defaultValues = useSelector(selectOfferDetails);

    return (
        <Grid container justify="center" spacing={4}>
            <Box pl={10} pr={10}>
                {defaultValues && (
                    <OfferForm
                        defaultValues={offerModelToForm(defaultValues)}
                        {...{ onSubmit }}
                    />
                )}
            </Box>
        </Grid>
    );
};
