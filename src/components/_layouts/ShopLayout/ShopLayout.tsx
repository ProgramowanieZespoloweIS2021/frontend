import React from 'react';
import * as styled from './ShopLayout.styled';
import Navigation from '@components/_layouts/Navigation/Navigation';
import { Box } from '@material-ui/core';

interface IProps {}

export const ShopLayout: React.FC<IProps> = ({ children }) => {
    return (
        <styled.Wrapper>
            <Navigation />
            <Box pt={10} pb={10}>
                {children}
            </Box>
        </styled.Wrapper>
    );
};
export default ShopLayout;
