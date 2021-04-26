import React, { useState } from 'react';
import { DefaultText, Header } from '@components/_universal/Typography.styled';
import { mockOffers } from '@domains/Landing/OffersList/mockOffers';
import {
    Container,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Divider,
    List,
    Avatar,
    ListItemAvatar,
    Fab,
} from '@material-ui/core';
import { Delete, Edit, Add } from '@material-ui/icons';
import { AddBtnContainer, TagChip } from './OffersDashboardPage.styled';
import AddEditOfferModal from './_components/AddEditOfferModal';

interface IProps {}

const OffersDashboardPage: React.FC<IProps> = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    return (
        <>
            <Container>
                <Header>Offers Dashboard</Header>
                <List>
                    {mockOffers.map(({ title, thumbnails, tags }, index) => (
                        <>
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar src={thumbnails[0].url} />
                                </ListItemAvatar>
                                <ListItemText>
                                    <DefaultText>{title}</DefaultText>
                                    {tags.map((tag, index) => (
                                        <TagChip
                                            variant="outlined"
                                            size="small"
                                            label={tag.name}
                                            key={index}
                                        />
                                    ))}
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit">
                                        <Edit />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Container>
            <AddBtnContainer>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <Add />
                </Fab>
            </AddBtnContainer>
            <AddEditOfferModal open={modalOpen} handleClose={handleClose} />
        </>
    );
};

export default OffersDashboardPage;
