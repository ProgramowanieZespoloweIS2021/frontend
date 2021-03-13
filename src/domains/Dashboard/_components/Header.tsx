import React from 'react';
import { Box } from '@material-ui/core';
import * as styled from './Header.styled';

interface IProps {}

const Header: React.FC<IProps> = ({ children }) => {
    return (
        <styled.Wrapper>
            <Box>{children}</Box>
        </styled.Wrapper>
    );
};

export default Header;
