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
} from '@material-ui/core';
import {
    CartPaymentContainer,
    CartTitle,
    CartPaymentItem,
    TableImageCell,
    PriceText,
} from './CartPage.styled';
import React from 'react';

interface IProps {}

const CartPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <CartTitle>Cart</CartTitle>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Product</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableImageCell>
                                    <img src="https://picsum.photos/150" />
                                </TableImageCell>
                                <TableCell align="center">
                                    Create Website
                                </TableCell>
                                <TableCell align="center">48,99 $</TableCell>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">48,99 $</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableImageCell>
                                    <img src="https://picsum.photos/150" />
                                </TableImageCell>
                                <TableCell align="center">
                                    Create Website
                                </TableCell>
                                <TableCell align="center">48,99 $</TableCell>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">48,99 $</TableCell>
                            </TableRow>
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
                            <PriceText>Price 92,88 $</PriceText>
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
