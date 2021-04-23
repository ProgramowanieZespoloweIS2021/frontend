import { Header } from '@components/_universal/Typography.styled';
import {
    Container,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Paper,
    Grid,
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
                <Paper elevation={3}>
                    <Grid container>
                        <Grid item sm={6} md={6} xs={12}>
                            <Header>Delivery</Header>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}></Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default CartPage;
