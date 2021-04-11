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
                <Button
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Home
                </Button>
                <IconButton size={32} name="ShoppingCart" />
            </styled.NavButtonsWrapper>
        </styled.Wrapper>
    );
};
export default Navigation;
