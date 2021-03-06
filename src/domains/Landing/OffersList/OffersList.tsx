import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    TablePagination,
    Button,
} from '@material-ui/core';
import {
    CardImage,
    CardLink,
    CardChip,
    CardPriceText,
    Input,
    ClearButton,
    ReactSelect,
    Label,
} from './OffersList.styled';
import { DefaultText } from '@components/_universal/Typography.styled';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags, getOffers } from '@state/_redux/offers/actions';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectAllTags } from '@state/_redux/offers/selectors';
import {
    selectOffers,
    selectTotalNumberOfOffers,
} from '@state/_redux/offers/selectors';
import { offersFormValidation } from './validation';
import { sortDirectionOptions, sortFieldOptions } from './options';
import { IOfferParams } from '@@types/models/Offer';
import { ISelectOption } from '@@types/models/SelectOption';
import { calculateOffset } from './utils';

interface IProps {}

interface IOffersForm {
    min: number;
    max: number;
    sortDirection: ISelectOption;
    sortField: ISelectOption;
    tags: ISelectOption[];
}

const OffersList: React.FC<IProps> = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isDirty },
        reset,
    } = useForm({
        resolver: yupResolver(offersFormValidation),
        mode: 'onSubmit',
    });
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(getAllTags.request(null));
        getOffersWithDefaultParams();
    }, []);

    useEffect(() => {
        handleSubmit(onSubmit, onFormError)();
    }, [page, rowsPerPage]);

    const onFormError = () => {
        getOffersWithDefaultParams();
    };

    const onSubmit = (data: IOffersForm): void => {
        const { min, max, sortDirection, sortField, tags } = data;
        const requestParams: IOfferParams = {
            pagination: {
                limit: rowsPerPage,
                offset: calculateOffset(rowsPerPage, page),
            },
            sortFilter: {
                direction: sortDirection.value,
                field: sortField.value,
                minPrice: min,
                maxPrice: max,
                tags: tags.map((tag) => ({ name: tag.value })),
            },
        };
        dispatch(getOffers.request(requestParams));
    };

    const getOffersWithDefaultParams = () => {
        const offerParams: IOfferParams = {
            pagination: {
                limit: rowsPerPage,
                offset: calculateOffset(rowsPerPage, page),
            },
            sortFilter: null,
        };
        dispatch(getOffers.request(offerParams));
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleReset = () => {
        reset();
        getOffersWithDefaultParams();
    };

    const tagOptions = useSelector(selectAllTags);
    const offersAmount = useSelector(selectTotalNumberOfOffers);
    const offers = useSelector(selectOffers);

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Price range</Label>
                    <Box display="flex">
                        <Input
                            helperText="Select min price"
                            {...register('min')}
                            label="min"
                            name="min"
                            type="number"
                            placeholder="min"
                            variant="outlined"
                        />
                        <Input
                            helperText="Select max price"
                            {...register('max')}
                            label="max"
                            type="number"
                            name="max"
                            placeholder="max"
                            variant="outlined"
                        />
                    </Box>
                    <Box display="flex" mb={2}>
                        {tagOptions && (
                            <Controller
                                control={control}
                                name="tags"
                                render={({ field: { onChange } }) => (
                                    <ReactSelect
                                        isMulti
                                        placeholder="Filter by tags..."
                                        options={tagOptions}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        )}
                        <Controller
                            control={control}
                            name="sortField"
                            render={({ field: { onChange } }) => (
                                <ReactSelect
                                    placeholder="Select sort params..."
                                    options={sortFieldOptions}
                                    onChange={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="sortDirection"
                            render={({ field: { onChange } }) => (
                                <ReactSelect
                                    placeholder="Select sort direction..."
                                    options={sortDirectionOptions}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Search
                    </Button>
                    <ClearButton variant="contained" onClick={handleReset}>
                        Default
                    </ClearButton>
                </form>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={4}
                    mb={2}
                >
                    <DefaultText>{`Found ${offersAmount} offers`}</DefaultText>
                </Box>
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
                                            <CardPriceText>
                                                {`from: ${minimalPrice} $`}
                                            </CardPriceText>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ),
                        )}
                    </Grid>
                </Box>
                <TablePagination
                    component="div"
                    count={offersAmount}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Container>
        </>
    );
};

export default OffersList;
