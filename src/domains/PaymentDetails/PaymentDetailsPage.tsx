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
    TextField,
    Box,
} from '@material-ui/core';
import { Input, FormContainer } from './PaymentDetailsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@state/_redux/user/actions';
import { selectUserDetails } from '@state/_redux/user/selectors';
import { getPayments } from '@state/_redux/payments/actions';
import { selectPayments } from '@state/_redux/payments/selectors';
import { useHistory, useParams } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { paymentFormValidation } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
export {};

interface IProps {}

interface UrlParams {
    id: string;
}

interface IForm {
    name: string;
    surname: string;
    email: string;
    cardNumber: string;
    expirationDate: string;
    codeCvv: string;
}

const PaymentDetailsPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams<UrlParams>();
    const paymentId = parseInt(id);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IForm>({
        resolver: yupResolver(paymentFormValidation),
        mode: 'onSubmit',
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const payments = useSelector(selectPayments);
    const payment = payments.filter(({ id }) => id === paymentId);

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormContainer>
                        <Input
                            label="Name"
                            type="text"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name && errors.name.message}
                            {...register('name')}
                        />
                        <Input
                            label="Surname"
                            type="text"
                            variant="outlined"
                            error={!!errors.surname}
                            helperText={
                                errors.surname && errors.surname.message
                            }
                            {...register('surname')}
                        />
                        <Input
                            label="Email"
                            type="text"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email && errors.email.message}
                            {...register('email')}
                        />
                        <Input
                            label="Card number"
                            type="text"
                            variant="outlined"
                            error={!!errors.cardNumber}
                            helperText={
                                errors.cardNumber && errors.cardNumber.message
                            }
                            {...register('cardNumber')}
                        />
                        <Input
                            label="Expiration Date"
                            type="text"
                            variant="outlined"
                            error={!!errors.expirationDate}
                            helperText={
                                errors.expirationDate &&
                                errors.expirationDate.message
                            }
                            {...register('expirationDate')}
                        />
                        <Input
                            label="CVV code"
                            type="text"
                            variant="outlined"
                            error={!!errors.codeCvv}
                            helperText={
                                errors.codeCvv && errors.codeCvv.message
                            }
                            {...register('codeCvv')}
                        />
                        <Box mt={2}>
                            <Button
                                color="primary"
                                type="submit"
                                variant="outlined"
                            >
                                Pay
                            </Button>
                        </Box>
                    </FormContainer>
                </form>
            </Grid>
        </>
    );
};

export default PaymentDetailsPage;
