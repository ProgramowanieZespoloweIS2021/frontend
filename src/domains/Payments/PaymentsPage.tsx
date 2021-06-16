import React, { useEffect } from 'react';
import {
    Paper,
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip,
    Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@state/_redux/user/actions';
import { selectUserDetails } from '@state/_redux/user/selectors';
import { getPayments } from '@state/_redux/payments/actions';
import { selectPayments } from '@state/_redux/payments/selectors';
import { useHistory } from 'react-router';
export {};

interface IProps {}

const chipByStatus = new Map([
    ['IN_PROGRESS', <Chip label="in progress" color="primary" />],
    ['FINISHED', <Chip label="finished" color="secondary" />],
    ['CANCELLED', <Chip label="cancelled" color="default" />],
]);

const PaymentPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userDetails = useSelector(selectUserDetails);
    const { id } = userDetails;

    useEffect(() => {
        dispatch(getUser.request(''));
        id && dispatch(getPayments.request(id));
    }, [id]);

    const formatCreateTime = (createTime: Date): string => {
        const createTimeDate = new Date(createTime);
        const time = createTimeDate.toLocaleTimeString();
        const date = createTimeDate.toLocaleDateString();
        return `${date} ${time}`;
    };

    const payments = useSelector(selectPayments);

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell>Created Time</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {payments.map(
                                ({
                                    id,
                                    price,
                                    createTime,
                                    offerTitles,
                                    status,
                                }) => (
                                    <TableRow key={id}>
                                        <TableCell component="th" scope="row">
                                            {`${price} $`}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {formatCreateTime(createTime)}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {offerTitles[0]}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {chipByStatus.get(status)}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={() =>
                                                    history.push(
                                                        `payments/${id}`,
                                                    )
                                                }
                                            >
                                                Pay
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ),
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
};

export default PaymentPage;
