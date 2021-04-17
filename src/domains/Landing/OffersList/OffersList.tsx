import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    Select,
    Slider,
    TextField,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Favorite } from '@material-ui/icons';
import * as styled from './OffersList.styled';
import { DefaultText } from '@components/_universal/Typography.styled';
import { mockOffers } from './mockOffers';
import { useForm, Controller } from 'react-hook-form';

interface IProps {}

const tagsOptions = [
    {
        value: 'Java',
        label: 'Java',
    },
    {
        value: 'Python',
        label: 'Python',
    },
    {
        value: 'Javascript',
        label: 'Javascript',
    },
];

const OffersList: React.FC<IProps> = () => {
    const { register, handleSubmit, control, errors } = useForm();

    const onSubmit = (data: any): void => {
        console.log(data);
    };

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mb={4} display="flex">
                        <Box flex="1" mr={4}>
                            <TextField
                                fullWidth={true}
                                inputRef={register}
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
                        <styled.SliderContainer>
                            <DefaultText>Prince range</DefaultText>
                            <Controller
                                name="minMaxSlider"
                                control={control}
                                defaultValue={[10, 50]}
                                onChange={([, value]: number[]) => value}
                                as={<Slider valueLabelDisplay="auto" />}
                            />
                        </styled.SliderContainer>
                        <Box display="flex" alignItems="center">
                            <Controller
                                as={
                                    <Select native>
                                        <option value={10}>Default</option>
                                        <option value={20}>
                                            By lowest price
                                        </option>
                                        <option value={30}>
                                            By highest price
                                        </option>
                                    </Select>
                                }
                                defaultValue={10}
                                name="tags"
                                control={control}
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
                        <DefaultText>{`Found ${mockOffers.length} offers`}</DefaultText>
                        <Box display="flex" alignItems="center">
                            <styled.SortingLabel>Sort by:</styled.SortingLabel>
                            <Select
                                native
                                value="Ten"
                                onChange={() => console.log('Change')}
                            >
                                <option value={10}>Default</option>
                                <option value={20}>By lowest price</option>
                                <option value={30}>By highest price</option>
                            </Select>
                        </Box>
                    </Box>
                </form>
                <Divider />
                <Box my={2}>
                    <Grid container spacing={3} direction="row">
                        {mockOffers.map(
                            ({ name, user, description, tiers }) => (
                                <Grid item xs={3}>
                                    <Card>
                                        <styled.CardImage image="https://picsum.photos/seed/picsum/300/200" />
                                        <CardContent>
                                            <styled.CardTitle>
                                                {name}
                                            </styled.CardTitle>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <Rating
                                                    name="size-small"
                                                    size="small"
                                                    defaultValue={2}
                                                />
                                                <styled.UserRatesNumber>
                                                    {`(${user.ratesNumber})`}
                                                </styled.UserRatesNumber>
                                                <styled.CardUsername>
                                                    {user.name}
                                                </styled.CardUsername>
                                            </Box>
                                            <styled.CardDescription>
                                                {description}
                                            </styled.CardDescription>
                                        </CardContent>
                                        <styled.CardBottomActions>
                                            <DefaultText>
                                                {`from: ${tiers[0].price} $`}
                                            </DefaultText>
                                            <IconButton aria-label="add to favorites">
                                                <Favorite />
                                            </IconButton>
                                        </styled.CardBottomActions>
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
