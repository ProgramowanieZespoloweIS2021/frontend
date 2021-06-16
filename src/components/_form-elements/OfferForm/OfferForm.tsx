// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Grid, Omit } from '@material-ui/core';

import {
    Container,
    Input,
    Button,
    TierContainer,
    TierInput,
    CancelIcon,
} from './OfferForm.styled';
import Select from 'react-select';
import { SectionContainer } from '@components/_form-elements/SectionContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import { addOfferFormValidation } from '@components/_form-elements/OfferForm/validation';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags } from '@state/_redux/offers/actions';
import { selectAllTags } from '@state/_redux/offers/selectors';
import { IOffer } from '@@types/models/Offer';

interface IProps {
    onSubmit: (data: IAddOfferForm) => void;
    defaultValues?: Partial<IAddOfferForm>;
}

type SelectOption = {
    label: string;
    value: string;
};

export type IAddOfferForm = Omit<IOffer, 'user' | 'tags'> & {
    tags: SelectOption[];
    ownerId: number;
};
// TODO: Somehow, because of defaultValues, edit not working... :(
export const OfferForm: React.FC<IProps> = ({ onSubmit, defaultValues }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IAddOfferForm>({
        defaultValues: defaultValues && defaultValues,
        resolver: yupResolver(addOfferFormValidation),
        mode: 'onSubmit',
    });
    const dispatch = useDispatch();
    const [tiersIndexes, setTiersIndexes] = useState<number[]>([]);
    const [thumbnailIndexes, setThumbnailIndexes] = useState<number[]>([]);

    useEffect(() => {
        dispatch(getAllTags.request(null));
    }, []);

    const tagOptions = useSelector(selectAllTags);

    return (
        <form
            onSubmit={handleSubmit(
                (formValues) => onSubmit(formValues),
                (e) => console.log(e),
            )}
        >
            <Container container spacing={6}>
                <Grid item md={6}>
                    <SectionContainer>
                        <p>Details</p>
                        <Input
                            label="Title"
                            type="text"
                            variant="outlined"
                            error={!!errors.title}
                            helperText={errors.title && errors.title.message}
                            defaultValue={defaultValues && defaultValues.title}
                            {...register('title')}
                        />
                        <Input
                            label="description"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={6}
                            rowsMax={12}
                            error={!!errors.description}
                            defaultValue={
                                defaultValues && defaultValues.description
                            }
                            helperText={
                                errors.description && errors.description.message
                            }
                            {...register('description')}
                        />
                        <p>Tags</p>
                        {tagOptions && (
                            <Controller
                                control={control}
                                name="tags"
                                render={({
                                    field: { onChange },
                                    fieldState: { error },
                                }) => (
                                    <>
                                        <Select
                                            isMulti
                                            options={tagOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            onChange={onChange}
                                        />
                                        {error?.message}
                                    </>
                                )}
                            />
                        )}
                    </SectionContainer>
                </Grid>

                <Grid item md={6}>
                    <SectionContainer>
                        <p>Thumbnails (urls)</p>

                        {thumbnailIndexes.map((idx) => (
                            <Box
                                key={`thumbnail ${idx}`}
                                display="flex"
                                alignItems={'center'}
                            >
                                <Input
                                    label="Thumbnail"
                                    type="text"
                                    variant="outlined"
                                    error={
                                        !!(
                                            errors.thumbnails &&
                                            errors?.thumbnails[idx]
                                        )
                                    }
                                    helperText={
                                        errors?.thumbnails &&
                                        errors?.thumbnails[idx] &&
                                        errors?.thumbnails[idx]?.url?.message
                                    }
                                    {...register(`thumbnails.${idx}` as const)}
                                />

                                <CancelIcon
                                    name={'Close'}
                                    size={32}
                                    onClick={() =>
                                        setThumbnailIndexes(
                                            thumbnailIndexes.filter(
                                                (e) => e !== idx,
                                            ),
                                        )
                                    }
                                />
                            </Box>
                        ))}
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() =>
                                setThumbnailIndexes([
                                    ...thumbnailIndexes,
                                    thumbnailIndexes.length,
                                ])
                            }
                        >
                            Add thumbnails
                        </Button>
                    </SectionContainer>
                </Grid>

                <Grid item md={12}>
                    <SectionContainer>
                        <p>Tiers</p>

                        {tiersIndexes.map((idx) => (
                            <TierContainer item key={`tier ${idx}`}>
                                <Box
                                    display="flex"
                                    flexDirection="row-reverse"
                                    mb={2}
                                >
                                    <CancelIcon
                                        name={'Close'}
                                        size={32}
                                        onClick={() =>
                                            setTiersIndexes(
                                                tiersIndexes.filter(
                                                    (e) => e !== idx,
                                                ),
                                            )
                                        }
                                    />
                                </Box>

                                <TierInput
                                    label="Type"
                                    type="text"
                                    variant="outlined"
                                    helperText={
                                        errors.description &&
                                        errors.description.message
                                    }
                                    {...register(`tiers.${idx}.title` as const)}
                                />
                                <TierInput
                                    label="Description"
                                    type="text"
                                    variant="outlined"
                                    {...{ errors }}
                                    {...register(
                                        `tiers.${idx}.description` as const,
                                    )}
                                />
                                <TierInput
                                    label="Delivery time (days)"
                                    type="text"
                                    variant="outlined"
                                    type="number"
                                    {...{ errors }}
                                    {...register(
                                        `tiers.${idx}.deliveryTime` as const,
                                    )}
                                />
                                <TierInput
                                    label="Price (dollars)"
                                    type="text"
                                    variant="outlined"
                                    type="number"
                                    {...{ errors }}
                                    {...register(`tiers.${idx}.price` as const)}
                                />
                            </TierContainer>
                        ))}
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() =>
                                setTiersIndexes([
                                    ...tiersIndexes,
                                    tiersIndexes.length,
                                ])
                            }
                        >
                            Add tier
                        </Button>
                    </SectionContainer>
                </Grid>
            </Container>
            <Box display="flex" justifyContent="center">
                <Button variant="outlined" color="primary" type="submit">
                    {defaultValues ? 'Update offer ' : 'Create offer'}
                </Button>
            </Box>
        </form>
    );
};
