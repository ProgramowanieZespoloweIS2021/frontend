import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router';
import { getOrders } from '@state/_redux/orders/actions';
import { selectOrders } from '@state/_redux/orders/selectors';

interface IProps {}

export const MyOrdersPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    // const { id } = useSelector(selectUserDetails);
    const ordersList = useSelector(selectOrders);
    const history = useHistory();

    useEffect(() => {
        dispatch(getOrders.request(null));
    }, []);

    return (
        <Grid container justify="center" spacing={4}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Buyer</TableCell>
                            <TableCell>Seller</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordersList.map(
                            ({ id, buyer, seller, state, description }) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {buyer.firstName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {seller.firstName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {description}
                                    </TableCell>

                                    <TableCell
                                        align="right"
                                        component="th"
                                        scope="row"
                                    >
                                        {state}
                                    </TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
