import React, { useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
} from '@material-ui/core';
import {
    CardImage,
    CardLink,
    CardChip,
    CardPriceText,
} from './OffersList.styled';
import { DefaultText } from '@components/_universal/Typography.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags, getOffers } from '@state/_redux/offers/actions';
import {
    selectOffers,
    selectTotalNumberOfOffers,
} from '@state/_redux/offers/selectors';
import Form from '@domains/Landing/OffersList/_components/Form';

interface IProps {}

const OffersList: React.FC<IProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTags.request(null));
        dispatch(getOffers.request(null));
    }, []);

    const offersAmount = useSelector(selectTotalNumberOfOffers);
    const offers = useSelector(selectOffers);

    return (
        <>
            <Container>
                <Form />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={4}
                    mb={2}
                >
                    <DefaultText>{`Found ${offersAmount} offers`}</DefaultText>
                </Box>
                <Divider />
                <Box my={2}>
                    <Grid container spacing={3} direction="row">
                        {offers.map(
                            (
                                { id, name, minimalPrice, tags, thumbnails },
                                index,
                            ) => (
                                <Grid key={index} item xs={3}>
                                    <Card>
                                        <CardImage image={thumbnails[0].url} />
                                        <CardContent>
                                            <CardLink to={`/offers/${id}`}>
                                                {name}
                                            </CardLink>
                                            <Box mt={2}>
                                                {tags.map(({ name }, index) => (
                                                    <CardChip
                                                        key={index}
                                                        color="primary"
                                                        label={name}
                                                    />
                                                ))}
                                            </Box>
                                            <CardPriceText>
                                                {`from: ${minimalPrice} $`}
                                            </CardPriceText>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ),
                        )}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default OffersList;
