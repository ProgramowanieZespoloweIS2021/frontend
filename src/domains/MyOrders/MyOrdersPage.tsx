import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import {
    getBoughtOrders,
    getOrders,
    updateOrderState,
} from '@state/_redux/orders/actions';
import {
    selectBoughtOrders,
    selectOrders,
} from '@state/_redux/orders/selectors';
import { Controller, useForm } from 'react-hook-form';
import { Box } from '@material-ui/core';
import {
    StyledSelect,
    StyledHeader,
    StyledTableContainer,
    StyledTableRow,
} from './MyOrders.styled';
import { selectUserDetails } from '@state/_redux/user/selectors';

interface IProps {}

const stateOptions = [
    { label: 'Finished', value: 'FINISHED' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Ordered', value: 'ORDERED' },
];

export const MyOrdersPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const ordersList = useSelector(selectOrders);
    const boughtOrdersList = useSelector(selectBoughtOrders);
    const { control, getValues } = useForm();
    const { id } = useSelector(selectUserDetails);

    const handleUpdate = (id: number) => {
        const status = getValues(`state[${id}]`).value;
        dispatch(updateOrderState.request({ id, status }));
    };

    useEffect(() => {
        if (id) {
            dispatch(getOrders.request(id));
            dispatch(getBoughtOrders.request(id));
        }
    }, []);

    return (
        <Grid container justify="center" spacing={4}>
            <Grid item>
                <StyledHeader>Sold services</StyledHeader>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Buyer</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell>Update</TableCell>
                            </TableRow>
                        </TableHead>
                        {ordersList.map(
                            ({ id, buyer, seller, state, description }) => (
                                <StyledTableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {buyer.firstName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {description}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {state}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Box display="flex">
                                            <Controller
                                                control={control}
                                                name={`state.${id}`}
                                                render={({
                                                    field: { onChange },
                                                    fieldState: { error },
                                                }) => (
                                                    <>
                                                        <StyledSelect
                                                            options={
                                                                stateOptions
                                                            }
                                                            className="basic-multi-select"
                                                            classNamePrefix="select"
                                                            onChange={onChange}
                                                        />
                                                        {error?.message}
                                                    </>
                                                )}
                                            />

                                            <Button
                                                variant={'contained'}
                                                color={'secondary'}
                                                onClick={() => handleUpdate(id)}
                                            >
                                                Edit
                                            </Button>
                                        </Box>
                                    </TableCell>
                                </StyledTableRow>
                            ),
                        )}
                    </Table>
                </TableContainer>
            </Grid>

            <Grid item>
                <StyledHeader>Bought services</StyledHeader>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Seller</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>State</TableCell>
                            </TableRow>
                        </TableHead>
                        {boughtOrdersList.map(
                            ({ id, seller, state, description }) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {seller.firstName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {description}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {state}
                                    </TableCell>
                                </TableRow>
                            ),
                        )}
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};
