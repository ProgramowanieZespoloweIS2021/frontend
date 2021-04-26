import React from 'react';
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

interface IProps {}

const OffersDashboardPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <Header>Offers Dashboard</Header>
                <List>
                    {mockOffers.map(({ title, thumbnails, tags }) => (
                        <>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={thumbnails[0].url} />
                                </ListItemAvatar>
                                <ListItemText>
                                    <DefaultText>{title}</DefaultText>
                                    {tags.map((tag) => (
                                        <TagChip
                                            variant="outlined"
                                            size="small"
                                            label={tag.name}
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
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </AddBtnContainer>
        </>
    );
};

export default OffersDashboardPage;
