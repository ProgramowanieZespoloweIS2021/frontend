import {
    Container,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Divider,
    List,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React from 'react';

interface IProps {}

const OffersDashboardPage: React.FC<IProps> = () => {
    return (
        <>
            <Container>
                <h1>Offers Dashboard</h1>
                <List>
                    <ListItem>
                        <ListItemText>Some text</ListItemText>
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
                </List>
            </Container>
        </>
    );
};

export default OffersDashboardPage;
