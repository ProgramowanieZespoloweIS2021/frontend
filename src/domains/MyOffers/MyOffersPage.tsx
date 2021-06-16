import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOffer, getMyOffers } from '@state/_redux/offers/actions';
import { selectUserDetails } from '@state/_redux/user/selectors';
import { selectOffers } from '@state/_redux/offers/selectors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { OfferThumbnailCell, DeleteButton, Tag } from './MyOffers.styled';
import { useHistory } from 'react-router';

interface IProps {}

export const MyOffersPage: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const { id } = useSelector(selectUserDetails);
    const myOffersList = useSelector(selectOffers);
    const history = useHistory();

    useEffect(() => {
        if (id) {
            dispatch(getMyOffers.request(id));
        }
    }, []);

    const handleDeleteOffer = (id: number) => {
        dispatch(deleteOffer.request(id));
    };

    return (
        <Grid container justify="center" spacing={4}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Thumbnail</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Tags</TableCell>
                            <TableCell>Minimal price</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOffersList.map(
                            ({ name, id, tags, thumbnails, minimalPrice }) => (
                                <TableRow key={name}>
                                    <TableCell component="th" scope="row">
                                        <OfferThumbnailCell
                                            url={thumbnails[0].url}
                                            onClick={() =>
                                                history.push(`offers/${id}`)
                                            }
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {tags.map((tag) => (
                                            <Tag
                                                label={tag.name}
                                                color="primary"
                                            />
                                        ))}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {minimalPrice}$
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Button
                                            variant={'contained'}
                                            color={'secondary'}
                                            onClick={() =>
                                                history.push(
                                                    `offers/edit/${id}`,
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        component="th"
                                        scope="row"
                                    >
                                        <DeleteButton
                                            variant={'contained'}
                                            color={'secondary'}
                                            onClick={() =>
                                                handleDeleteOffer(id)
                                            }
                                        >
                                            Delete
                                        </DeleteButton>
                                    </TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
