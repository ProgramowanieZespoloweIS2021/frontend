import React from 'react';
import * as styled from './Navigation.styled';
import { Box, Button } from '@material-ui/core';
import paths from '@shared/paths';
import { useHistory } from 'react-router';
import IconButton from '@components/_universal/IconButton/IconButton';

interface IProps {}

export const Navigation: React.FC<IProps> = ({ children }) => {
    const history = useHistory();

    return (
        <styled.Wrapper>
            <styled.Logo>Software Factory</styled.Logo>
            <styled.NavButtonsWrapper>
                <styled.NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Home
                </styled.NavButton>
                <styled.NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Offers
                </styled.NavButton>
                <styled.NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Orders
                </styled.NavButton>
                <styled.NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Messages
                </styled.NavButton>
                <styled.NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Profile
                </styled.NavButton>
                <IconButton
                    size={32}
                    name="ShoppingCart"
                    onClick={() => history.push(paths.cart)}
                />
            </styled.NavButtonsWrapper>
        </styled.Wrapper>
    );
};
export default Navigation;
