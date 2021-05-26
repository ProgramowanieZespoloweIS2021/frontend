import { Header } from '@components/_universal/Typography.styled';
import {
    Container,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Grid,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
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
import { getCart } from '@state/_redux/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, selectCartId } from '@state/_redux/cart/selectors';

interface IProps {}

const CartPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const cartId = useSelector(selectCartId);

    useEffect(() => {
        dispatch(getCart.request(cartId));
    }, []);

    const handleDelete = (offerId: number) => {
        console.log(offerId);
    };

    const cart = useSelector(selectCart);
    const { items, totalPrice } = cart;

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
                            <Header>Delivery</Header>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="payment"
                                    name="payment"
                                    value="payu"
                                    onChange={() => console.log('Change')}
                                >
                                    <FormControlLabel
                                        value="payu"
                                        control={<Radio />}
                                        label="Payu"
                                    />
                                    <FormControlLabel
                                        value="transfer"
                                        control={<Radio />}
                                        label="Transfer"
                                    />
                                    <FormControlLabel
                                        value="bank"
                                        control={<Radio />}
                                        label="Bank"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </CartPaymentItem>
                        <CartPaymentItem item sm={6} md={6} xs={12}>
                            <PriceText>Price {totalPrice} $</PriceText>
                            <Button variant="outlined" color="primary">
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
