import { DefaultText, Header } from '@components/_universal/Typography.styled';
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
import * as styled from './CartPage.styled';
import React from 'react';

interface IProps {}

const CartPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <styled.CartTitle>Cart</styled.CartTitle>
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
                                <styled.TableImageCell>
                                    <img src="https://picsum.photos/150" />
                                </styled.TableImageCell>
                                <TableCell align="center">
                                    Create Website
                                </TableCell>
                                <TableCell align="center">48,99 $</TableCell>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">48,99 $</TableCell>
                            </TableRow>
                            <TableRow>
                                <styled.TableImageCell>
                                    <img src="https://picsum.photos/150" />
                                </styled.TableImageCell>
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
                <styled.CartPaymentContainer elevation={3}>
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justify="center"
                    >
                        <styled.CartPaymentItem item sm={6} md={6} xs={12}>
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
                        </styled.CartPaymentItem>
                        <styled.CartPaymentItem item sm={6} md={6} xs={12}>
                            <styled.PriceText>Price 92,88 $</styled.PriceText>
                            <Button variant="contained" color="primary">
                                Checkout
                            </Button>
                        </styled.CartPaymentItem>
                    </Grid>
                </styled.CartPaymentContainer>
            </Container>
        </>
    );
};

export default CartPage;
