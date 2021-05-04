import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid } from '@material-ui/core';

import { Container, Button, Input } from './ChangePasswordForm.styled';
import { IChangeUserDetailsData } from '@domains/Account/types';
import { changeUserDetailsSchema } from '@domains/Account/validation';

interface IProps {
    firstName: string;
    lastName: string;
    email: string;
}

const ChangeUserDetailsForm: React.FC<IProps> = ({
    firstName,
    lastName,
    email,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(changeUserDetailsSchema({ firstName, lastName })),
    });

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
