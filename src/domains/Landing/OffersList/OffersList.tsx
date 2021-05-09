import React, { useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import {
    CardBottomActions,
    CardImage,
    CardTitle,
    SortingLabel,
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

interface IProps {}

const OffersList: React.FC<IProps> = () => {
    const { register, handleSubmit, control } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data: any): void => {
        console.log(data);
    };

    useEffect(() => {
        dispatch(getAllTags.request(null));
        dispatch(getOffers.request(null));
    }, []);

    const tagOptions = useSelector(selectAllTags);
    const offers = useSelector(selectOffers);
    const offersAmount = useSelector(selectTotalNumberOfOffers);

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mb={4} display="flex">
                        <Box flex="1" mr={4}>
                            <TextField
                                fullWidth={true}
                                {...register('offerName')}
                                label="Search offer"
                                name="offerName"
                                placeholder="Offer name"
                                type="search"
                                variant="outlined"
                            />
                        </Box>
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            type="submit"
                        >
                            Search
                        </Button>
                    </Box>
                    <Box display="flex">
                        <Box mr={2}>
                            <TextField
                                {...register('min')}
                                label="min"
                                name="min"
                                placeholder="min"
                                variant="outlined"
                            />
                        </Box>
                        <Box mr={3}>
                            <TextField
                                {...register('max')}
                                label="max"
                                name="max"
                                placeholder="max"
                                variant="outlined"
                            />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Controller
                                name="tag"
                                render={({ field }) => (
                                    <Select {...field}>
                                        <MenuItem value={'Java'}>Java</MenuItem>
                                        <MenuItem value={'Python'}>
                                            Python
                                        </MenuItem>
                                    </Select>
                                )}
                                control={control}
                                defaultValue={'Java'}
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={4}
                        mb={2}
                    >
                        <DefaultText>{`Found ${offersAmount} offers`}</DefaultText>
                        <Box display="flex" alignItems="center">
                            <SortingLabel>Sort by:</SortingLabel>
                            <Select
                                value={10}
                                onChange={() => console.log('Change')}
                            >
                                <MenuItem value={10}>Default</MenuItem>
                                <MenuItem value={20}>High value</MenuItem>
                                <MenuItem value={30}>Low value</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                </form>
                <Divider />
                <Box my={2}>
                    <Grid container spacing={3} direction="row">
                        {offers.map(
                            (
                                { name, minimalPrice, tags, thumbnails },
                                index,
                            ) => (
                                <Grid key={index} item xs={3}>
                                    <Card>
                                        <CardImage image={thumbnails[0].url} />
                                        <CardContent>
                                            <CardTitle>{name}</CardTitle>
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
