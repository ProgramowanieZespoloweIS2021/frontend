import {
    Container,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Grid,
    Button,
    IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    CartPaymentContainer,
    CartTitle,
    CartPaymentItem,
    PriceText,
} from './CartPage.styled';
import React, { useEffect } from 'react';
import {
    createCart,
    deleteItemFromCart,
    getCart,
    submitCart,
} from '@state/_redux/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, selectCartId } from '@state/_redux/cart/selectors';
import { ICartItemDetails } from '@@types/models/Cart';
import { selectUserDetails } from '@state/_redux/user/selectors';

interface IProps {}

const CartPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const cartId = useSelector(selectCartId);
    const userDetails = useSelector(selectUserDetails);

    useEffect(() => {
        dispatch(createCart.request(null));
        dispatch(getCart.request(cartId));
    }, []);

    const handleDelete = (itemId: number) => {
        dispatch(deleteItemFromCart.request({ cartId, itemId }));
    };

    const handleSubmission = () => {
        const { id } = userDetails;
        if (id) dispatch(submitCart.request({ cartId, buyerId: id }));
    };

    const calculateItemsTotalPrice = (items: ICartItemDetails[]) => {
        return items.reduce(
            (totalPrice, item) => totalPrice + item.tierPrice,
            0,
        );
    };

    const cart = useSelector(selectCart);
    const { items } = cart;

    return (
        <>
            <Container>
                <CartTitle>Cart</CartTitle>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Tier</TableCell>
                                <TableCell>Tier title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(
                                (
                                    {
                                        id,
                                        offerTitle,
                                        tierId,
                                        tierTitle,
                                        tierPrice,
                                    },
                                    index,
                                ) => (
                                    <TableRow key={index}>
                                        <TableCell>{offerTitle}</TableCell>
                                        <TableCell>{tierId}</TableCell>
                                        <TableCell>{tierTitle}</TableCell>
                                        <TableCell>{tierPrice}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => handleDelete(id)}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ),
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <CartPaymentContainer elevation={3}>
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justify="center"
                    >
                        <CartPaymentItem item sm={6} md={6} xs={12}>
                            <PriceText>
                                Price {calculateItemsTotalPrice(items)} $
                            </PriceText>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => handleSubmission()}
                            >
                                Checkout
                            </Button>
                        </CartPaymentItem>
                    </Grid>
                </CartPaymentContainer>
            </Container>
        </>
    );
};

export default CartPage;
