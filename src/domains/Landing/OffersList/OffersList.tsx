import React, { useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    MenuItem,
    TextField,
} from '@material-ui/core';
import Select from 'react-select';
import { Favorite } from '@material-ui/icons';
import {
    CardBottomActions,
    CardImage,
    CardTitle,
    SortingLabel,
    CardLink,
    CardChip,
    Input,
} from './OffersList.styled';
import { DefaultText } from '@components/_universal/Typography.styled';
import { mockOffers } from './mockOffers';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { getAllTags, getOffers } from '@state/_redux/offers/actions';
import {
    selectAllTags,
    selectOffers,
    selectTotalNumberOfOffers,
} from '@state/_redux/offers/selectors';
import { Link } from 'react-router-dom';
import { ISelectOption } from '@@types/models/SelectOption';
import { SortField, SortOrder } from '@@types/models/Sort';
import { IOfferSortFilterParams, ITag } from '@@types/models/Offer';

interface IProps {}

interface IOffersForm {
    min: number;
    max: number;
    sortDirection: ISelectOption;
    sortField: ISelectOption;
    tags: ISelectOption[];
}

const OffersList: React.FC<IProps> = () => {
    const { register, handleSubmit, control } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data: IOffersForm): void => {
        console.log(data);
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

    useEffect(() => {
        dispatch(getAllTags.request(null));
        dispatch(getOffers.request(null));
    }, []);

    const tagOptions = useSelector(selectAllTags);
    const offers = useSelector(selectOffers);
    const offersAmount = useSelector(selectTotalNumberOfOffers);

    const sortDirectionOptions: ISelectOption[] = [
        {
            value: SortOrder.ASC,
            label: 'ascending',
        },
        {
            value: SortOrder.DESC,
            label: 'descending',
        },
    ];

    const sortFieldOptions: ISelectOption[] = [
        {
            value: SortField.CREATION_TIMESTAMP,
            label: 'creation time',
        },
        {
            value: SortField.LOWEST_PRICE,
            label: 'lowest price',
        },
        {
            value: SortField.TITLE,
            label: 'title',
        },
    ];

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('min')}
                        label="min"
                        name="min"
                        placeholder="min"
                        variant="outlined"
                    />
                    <Input
                        {...register('max')}
                        label="max"
                        name="max"
                        placeholder="max"
                        variant="outlined"
                    />
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
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={onChange}
                            />
                        )}
                    />
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
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={onChange}
                            />
                        )}
                    />
                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        type="submit"
                    >
                        Search
                    </Button>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={4}
                        mb={2}
                    >
                        <DefaultText>{`Found ${offersAmount} offers`}</DefaultText>
                    </Box>
                </form>
                <Divider />
                <Box my={2}>
                    <Grid container spacing={3} direction="row">
                        {offers.map(
                            (
                                { id, name, minimalPrice, tags, thumbnails },
                                index,
                            ) => (
                                <Grid key={index} item xs={3}>
                                    <Card>
                                        <CardImage image={thumbnails[0].url} />
                                        <CardContent>
                                            <CardLink to={`/offers/${id}`}>
                                                {name}
                                            </CardLink>
                                            <Box mt={2}>
                                                {tags.map(({ name }, index) => (
                                                    <CardChip
                                                        key={index}
                                                        color="primary"
                                                        label={name}
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>
                                        <CardBottomActions>
                                            <DefaultText>
                                                {`from: ${minimalPrice} $`}
                                            </DefaultText>
                                            <IconButton aria-label="add to favorites">
                                                <Favorite />
                                            </IconButton>
                                        </CardBottomActions>
                                    </Card>
                                </Grid>
                            ),
                        )}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default OffersList;
