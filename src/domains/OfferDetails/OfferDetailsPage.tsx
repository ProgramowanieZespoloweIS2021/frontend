import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Box, Button, Grid, Tabs, TextField } from '@material-ui/core';
import * as styled from './OfferDetailsPage.styled';
import { IconManager } from '@components/_universal';

import { ICartItemRequest } from '@@types/models/Cart';
import { addItemToCart, createCart } from '@state/_redux/cart/actions';
import { getUser } from '@state/_redux/user/actions';
import { getOfferDetails } from '@state/_redux/offers/actions';
import { createChat } from '@state/_redux/chat/actions';
import { selectUserDetails, isAuthorized } from '@state/_redux/user/selectors';
import { selectOfferDetails } from '@state/_redux/offers/selectors';
import { selectCartId } from '@state/_redux/cart/selectors';

interface IProps {}
interface UrlParams {
    id: string;
}

const OfferDetailsPage: React.FC<IProps> = () => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const [itemDescription, setItemDescription] = React.useState('');
    const { id } = useParams<UrlParams>();
    const offerId = parseInt(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createCart.request(null));
        dispatch(getOfferDetails.request(offerId));
        dispatch(getUser.request(''));
    }, []);

    const offerDetails = useSelector(selectOfferDetails);
    const cartId = useSelector(selectCartId);
    const userDetails = useSelector(selectUserDetails);
    const isUserAuthorized = useSelector(isAuthorized);

    const handleAddToCart = (tierId: number) => {
        const cartItemRequest: ICartItemRequest = {
            cartId,
            cartItem: {
                offerId,
                tierId,
                description: itemDescription,
            },
        };
        dispatch(addItemToCart.request(cartItemRequest));
        setItemDescription('');
    };

    const handleContact = () => {
        if (offerDetails && userDetails.id && userDetails.email) {
            const contact = {
                id: offerDetails.ownerId,
                nickname: offerDetails.title,
            };
            const user = { id: userDetails.id, nickname: userDetails.email };
            dispatch(createChat.request([user, contact]));
        }
    };

    const handleTextFieldChange = (e: any) => {
        const text = e.target.value;
        setItemDescription(text);
    };

    const areBtnsVisible = () => {
        if (offerDetails) {
            return offerDetails.ownerId !== userDetails.id && isUserAuthorized;
        }
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
                            <styled.OfferThumbnail
                                url={offerDetails.thumbnails[0].url}
                            />
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

                                                        {areBtnsVisible() && (
                                                            <>
                                                                <styled.ItemDescriptionTextField
                                                                    type="text"
                                                                    variant="outlined"
                                                                    placeholder="Provide info..."
                                                                    multiline
                                                                    rows={6}
                                                                    rowsMax={12}
                                                                    onChange={
                                                                        handleTextFieldChange
                                                                    }
                                                                />
                                                                <Box
                                                                    justifyContent={
                                                                        'space-between'
                                                                    }
                                                                    display={
                                                                        'flex'
                                                                    }
                                                                >
                                                                    <Button
                                                                        variant={
                                                                            'contained'
                                                                        }
                                                                        color={
                                                                            'secondary'
                                                                        }
                                                                        onClick={
                                                                            handleContact
                                                                        }
                                                                    >
                                                                        <styled.IconMargin
                                                                            size={
                                                                                32
                                                                            }
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
                                                                            size={
                                                                                32
                                                                            }
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
