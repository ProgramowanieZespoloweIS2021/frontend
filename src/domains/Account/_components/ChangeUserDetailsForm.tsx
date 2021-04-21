import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid } from '@material-ui/core';

import { Container, Button, Input } from './ChangePasswordForm.styled';

interface IProps {
    firstName: string;
    lastName: string;
    email: string;
}

interface IChangeUserDetailsData {
    firstName: string;
    lastName: string;
}

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
});

const ChangeUserDetailsForm: React.FC<IProps> = ({
    firstName,
    lastName,
    email,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({ resolver: yupResolver(schema) });

    useEffect(() => {
        setValue('firstName', firstName);
        setValue('lastName', lastName);
        setValue('email', email);
    }, [firstName, lastName, email]);

    const onSubmit = (data: IChangeUserDetailsData) => console.log(data);

    return (
        <Container container direction="column" spacing={3}>
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        error={!!errors.firstName}
                        helperText={
                            errors.firstName && errors.firstName.message
                        }
                        {...register('firstName')}
                        id="account-first-name-input"
                        label="First name"
                        type="text"
                        variant="outlined"
                        key="First name"
                        defaultValue={firstName}
                    />
                    <Input
                        error={!!errors.lastName}
                        helperText={errors.lastName && errors.lastName.message}
                        {...register('lastName')}
                        id="account-last-name-input"
                        label="Last name"
                        type="text"
                        variant="outlined"
                        key="Last name"
                        defaultValue={lastName}
                    />
                    <Input
                        disabled
                        id="account-email-input"
                        label="Email"
                        type="email"
                        variant="outlined"
                        key="Email"
                        defaultValue={email}
                    />
                    <Button variant="outlined" color="primary" type="submit">
                        Save
                    </Button>
                </form>
            </Grid>
        </Container>
    );
};

export default ChangeUserDetailsForm;
