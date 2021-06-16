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
import { Input, FormContainer, Label } from './PaymentDetailsPage.styled';
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
    expirationDateMonth: string;
    expirationDateYear: string;
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

    const onSubmit = (data: IForm) => {
        console.log(data);
    };

    const payments = useSelector(selectPayments);
    const payment = payments.filter(({ id }) => id === paymentId);

    return (
        <>
            <Grid container justify="center" spacing={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormContainer>
                        <Label>Name</Label>
                        <Input
                            label="Name"
                            type="text"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name && errors.name.message}
                            {...register('name')}
                        />
                        <Label>Surname</Label>
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
                        <Label>Email</Label>
                        <Input
                            label="Email"
                            type="text"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email && errors.email.message}
                            {...register('email')}
                        />
                        <Label>16 digit card number</Label>
                        <Input
                            label="Card number"
                            type="text"
                            variant="outlined"
                            inputProps={{ maxLength: 16 }}
                            error={!!errors.cardNumber}
                            helperText={
                                errors.cardNumber && errors.cardNumber.message
                            }
                            {...register('cardNumber')}
                        />
                        <Label>Expiration date in format mm/yy </Label>
                        <Box display="flex">
                            <Box mr={1}>
                                <Input
                                    label="Month"
                                    type="text"
                                    variant="outlined"
                                    inputProps={{ maxLength: 2 }}
                                    error={!!errors.expirationDateMonth}
                                    helperText={
                                        errors.expirationDateMonth &&
                                        errors.expirationDateMonth.message
                                    }
                                    {...register('expirationDateMonth')}
                                />
                            </Box>
                            <Box>
                                <Input
                                    label="Year"
                                    type="text"
                                    variant="outlined"
                                    inputProps={{ maxLength: 2 }}
                                    error={!!errors.expirationDateYear}
                                    helperText={
                                        errors.expirationDateYear &&
                                        errors.expirationDateYear.message
                                    }
                                    {...register('expirationDateYear')}
                                />
                            </Box>
                        </Box>
                        <Label>3 digit CCV code</Label>
                        <Input
                            label="CVV code"
                            type="text"
                            variant="outlined"
                            inputProps={{ maxLength: 3 }}
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
