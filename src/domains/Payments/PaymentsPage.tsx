import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@state/_redux/user/actions';
import { selectUserDetails } from '@state/_redux/user/selectors';
import { getPayments } from '@state/_redux/payments/actions';
import { selectPayments } from '@state/_redux/payments/selectors';

interface IProps {}

const PaymentPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const userDetails = useSelector(selectUserDetails);
    const { id } = userDetails;

    useEffect(() => {
        dispatch(getUser.request(''));
        id && dispatch(getPayments.request(id));
    }, [id]);

    const payments = useSelector(selectPayments);

    return <></>;
};

export default PaymentPage;
