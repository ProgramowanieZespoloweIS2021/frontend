import { IOfferSortFilterParams } from '@@types/models/Offer';
import { ISelectOption } from '@@types/models/SelectOption';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import { getOffers } from '@state/_redux/offers/actions';
import { selectAllTags } from '@state/_redux/offers/selectors';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Input } from './Form.styled';
import { sortDirectionOptions, sortFieldOptions } from './options';
import { offersFormValidation } from './validation';

interface IProps {}

interface IOffersForm {
    min: number;
    max: number;
    sortDirection: ISelectOption;
    sortField: ISelectOption;
    tags: ISelectOption[];
}

const Form: React.FC<IProps> = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(offersFormValidation),
        mode: 'onSubmit',
    });
    const dispatch = useDispatch();

    const onSubmit = (data: IOffersForm): void => {
        const { min, max, sortDirection, sortField, tags } = data;
        const requestParams: IOfferSortFilterParams = {
            direction: sortDirection.value,
            field: sortField.value,
            minPrice: min,
            maxPrice: max,
            tags: tags.map((tag) => ({ name: tag.value })),
        };
        dispatch(getOffers.request(requestParams));
    };

    const tagOptions = useSelector(selectAllTags);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex">
                    <Input
                        error={!!errors.min}
                        helperText={errors.min && errors.min.message}
                        {...register('min')}
                        label="min"
                        name="min"
                        placeholder="min"
                        variant="outlined"
                    />
                    <Input
                        error={!!errors.max}
                        helperText={errors.max && errors.max.message}
                        {...register('max')}
                        label="max"
                        name="max"
                        placeholder="max"
                        variant="outlined"
                    />
                </Box>
                <Box mb={1}>
                    {tagOptions && (
                        <Controller
                            control={control}
                            name="tags"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: {
                                    invalid,
                                    isTouched,
                                    isDirty,
                                    error,
                                },
                                formState,
                            }) => (
                                <Select
                                    isMulti
                                    options={tagOptions}
                                    onChange={onChange}
                                />
                            )}
                        />
                    )}
                </Box>
                <Box mb={1}>
                    <Controller
                        control={control}
                        name="sortField"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState,
                        }) => (
                            <Select
                                options={sortFieldOptions}
                                onChange={onChange}
                            />
                        )}
                    />
                </Box>
                <Box mb={1}>
                    <Controller
                        control={control}
                        name="sortDirection"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState,
                        }) => (
                            <Select
                                options={sortDirectionOptions}
                                onChange={onChange}
                            />
                        )}
                    />
                </Box>
                <Button variant={'contained'} color={'secondary'} type="submit">
                    Search
                </Button>
            </form>
        </>
    );
};

export default Form;
