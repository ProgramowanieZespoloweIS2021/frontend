import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as styled from './OfferDetailsPage.styled';
import { AppBar, Box, Button, Grid, Tabs } from '@material-ui/core';
import { IconManager } from '@components/_universal';
import { IOffer } from '@@types/models/Offer';
import { ICartItem } from '@@types/models/Cart';
import { addItemToCart } from '@state/_redux/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getOfferDetails } from '@state/_redux/offers/actions';
import { selectOfferDetails } from '@state/_redux/offers/selectors';

interface IProps {}

//TODO: Change mocks to real api objects
const mockOffer: IOffer = {
    title: 'Best Website Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    user: {
        name: 'John',
        lastName: 'Doe',
        averageRate: 5.0,
        ratesNumber: 210,
    },
    thumbnails: [],
    tiers: [
        {
            id: 1,
            title: 'Low',
            description: '',
            price: 17.65,
            deliveryTime: 7,
        },
        {
            id: 2,
            title: 'Medium',
            description: '',
            price: 32.65,
            deliveryTime: 3,
        },
        {
            id: 3,
            title: 'High',
            description: '',
            price: 52.14,
            deliveryTime: 2,
        },
    ],
    tags: [{ name: 'Java' }, { name: 'C#' }],
};

interface UrlParams {
    id: string;
}

//TODO: Maybe separate tabs component? (waiting for API model structure)
//TODO: Thumbnails carousel component (backend)
//TODO: Connect contact, toCard buttons
const OfferDetailsPage: React.FC<IProps> = () => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const { id } = useParams<UrlParams>();
    const offerId = parseInt(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOfferDetails.request(offerId));
    }, []);

    const offerDetails = useSelector(selectOfferDetails);
    console.log(offerDetails);

    const handleAddToCart = (tierId: number) => {
        const cartItem: ICartItem = {
            offerId,
            tierId,
            description: 'new offer',
        };
        console.log(cartItem);
        dispatch(addItemToCart.request(cartItem));
    };

    return (
        offerDetails && (
            <>
                <Box m={10}>
                    <Grid container spacing={10}>
                        <Grid item md={6}>
                            <styled.OfferName>
                                {offerDetails.title}
                            </styled.OfferName>
                            {/* <Grid item md={6}>
                                <styled.UserInfoCard>
                                    <styled.LetterCircle>
                                        {mockOffer.user.name[0]}
                                    </styled.LetterCircle>
                                    <styled.UserName>
                                        {`${mockOffer.user.name} ${mockOffer.user.lastName}`}
                                    </styled.UserName>
                                    <IconManager size={12} name="Star" />
                                    <styled.RateValueText>
                                        {mockOffer.user.averageRate}
                                    </styled.RateValueText>
                                    <styled.RateCountText>
                                        ({mockOffer.user.ratesNumber})
                                    </styled.RateCountText>
                                </styled.UserInfoCard>
                            </Grid> */}
                            <styled.OfferThumbnail />
                            <styled.OfferName>Description</styled.OfferName>
                            <styled.OfferDescription>
                                {offerDetails.description}
                            </styled.OfferDescription>
                        </Grid>
                        <Grid item md={6}>
                            <styled.OfferOptions>
                                <AppBar position="static">
                                    <Tabs
                                        value={tabIndex}
                                        onChange={(event, value) =>
                                            setTabIndex(value)
                                        }
                                        aria-label="simple tabs example"
                                    >
                                        {offerDetails.tiers.map(
                                            (tierItem, index) => (
                                                <styled.TabButton
                                                    label={tierItem.title}
                                                    onClick={() =>
                                                        setTabIndex(index)
                                                    }
                                                />
                                            ),
                                        )}
                                    </Tabs>
                                </AppBar>
                                <styled.TabPanel>
                                    {offerDetails.tiers.map(
                                        (tierItem, index) => (
                                            <>
                                                {tabIndex === index && (
                                                    <>
                                                        <Box
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="space-between"
                                                            marginBottom={2}
                                                        >
                                                            <Grid item>
                                                                <styled.OfferShortName>
                                                                    {
                                                                        tierItem.title
                                                                    }
                                                                </styled.OfferShortName>
                                                            </Grid>

                                                            <Box
                                                                display="flex"
                                                                alignItems="center"
                                                            >
                                                                <Grid item>
                                                                    <IconManager
                                                                        size={
                                                                            32
                                                                        }
                                                                        name="Dollar"
                                                                    />
                                                                </Grid>
                                                                <Grid item>
                                                                    <styled.UserName>
                                                                        {
                                                                            tierItem.price
                                                                        }
                                                                    </styled.UserName>
                                                                </Grid>
                                                            </Box>
                                                        </Box>

                                                        <Box
                                                            display="flex"
                                                            marginBottom={2}
                                                        >
                                                            {offerDetails.tags.map(
                                                                (tag) => (
                                                                    <styled.TechnologyChip
                                                                        label={
                                                                            tag.name
                                                                        }
                                                                        color="primary"
                                                                        clickable
                                                                        onClick={() =>
                                                                            console.log(
                                                                                'Tag picked',
                                                                            )
                                                                        }
                                                                    />
                                                                ),
                                                            )}
                                                        </Box>

                                                        <Box
                                                            marginBottom={2}
                                                            display="flex"
                                                            alignItems="center"
                                                        >
                                                            <styled.IconMargin
                                                                size={32}
                                                                name="Clock"
                                                            />
                                                            <p>{`${tierItem.deliveryTime} days deliver time`}</p>
                                                        </Box>

                                                        <Box
                                                            justifyContent={
                                                                'space-between'
                                                            }
                                                            display={'flex'}
                                                        >
                                                            <Button
                                                                variant={
                                                                    'contained'
                                                                }
                                                                color={
                                                                    'secondary'
                                                                }
                                                                onClick={() =>
                                                                    console.log(
                                                                        'tocart',
                                                                    )
                                                                }
                                                            >
                                                                <styled.IconMargin
                                                                    size={32}
                                                                    name="Clock"
                                                                    fill={[
                                                                        'secondary',
                                                                    ]}
                                                                />
                                                                Contact
                                                            </Button>
                                                            <Button
                                                                variant={
                                                                    'contained'
                                                                }
                                                                color={
                                                                    'secondary'
                                                                }
                                                                onClick={() => {
                                                                    handleAddToCart(
                                                                        tierItem.id,
                                                                    );
                                                                }}
                                                            >
                                                                <styled.IconMargin
                                                                    size={32}
                                                                    name="ShoppingCart"
                                                                    fill={[
                                                                        'secondary',
                                                                    ]}
                                                                />
                                                                To cart
                                                            </Button>
                                                        </Box>
                                                    </>
                                                )}
                                            </>
                                        ),
                                    )}
                                </styled.TabPanel>
                            </styled.OfferOptions>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    );
};

export default OfferDetailsPage;
