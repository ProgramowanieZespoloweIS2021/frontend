import React from 'react';
import { Controller } from 'react-hook-form';
import { Box, Grid } from '@material-ui/core';

import {
    Container,
    Input,
    Button,
    TierContainer,
    TierInput,
    CancelIcon,
} from './Form.styled';
import Select from 'react-select';
import { useLogic } from '@domains/OfferAdd/_components/useLogic';

const Form = () => {
    const {
        thumbnailIndexes,
        setTiersIndexes,
        tiersIndexes,
        setThumbnailIndexes,
        control,
        handleSubmit,
        onSubmit,
        register,
        tagOptions,
    } = useLogic();

    //TODO: Connect errors
    return (
        <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
            <Container container spacing={3}>
                <Grid item md={6}>
                    <p>Details</p>
                    <Input
                        label="Title"
                        type="text"
                        variant="outlined"
                        {...register('title')}
                    />
                    <Input
                        label="description"
                        type="text"
                        variant="outlined"
                        multiline
                        rows={6}
                        rowsMax={12}
                        {...register('description')}
                    />
                    <p>Tags</p>
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
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={onChange}
                                />
                            )}
                        />
                    )}
                </Grid>
                <Grid item md={6}>
                    <p>Thumbnails</p>

                    {thumbnailIndexes.map((idx) => (
                        <Box
                            key={`thumbnail ${idx}`}
                            display="flex"
                            alignItems={'center'}
                        >
                            {idx}
                            <Input
                                label="Thumbnail"
                                type="text"
                                variant="outlined"
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
                        variant="contained"
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
                </Grid>

                <Grid item md={12}>
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
                                {...register(`tiers.${idx}.title` as const)}
                            />
                            <TierInput
                                label="Description"
                                type="text"
                                variant="outlined"
                                {...register(
                                    `tiers.${idx}.description` as const,
                                )}
                            />
                            <TierInput
                                label="Delivery time"
                                type="text"
                                variant="outlined"
                                {...register(
                                    `tiers.${idx}.deliveryTime` as const,
                                )}
                            />
                            <TierInput
                                label="Price"
                                type="text"
                                variant="outlined"
                                {...register(`tiers.${idx}.price` as const)}
                            />
                        </TierContainer>
                    ))}
                    <Button
                        variant="contained"
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
                </Grid>
            </Container>
            <Box display="flex" justifyContent="center">
                <Button variant="contained" color="primary" type="submit">
                    Create offer
                </Button>
            </Box>
        </form>
    );
};

export default Form;
