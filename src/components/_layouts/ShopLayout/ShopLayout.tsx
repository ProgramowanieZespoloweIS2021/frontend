import React from 'react';
import * as styled from './ShopLayout.styled';
import Navigation from '@components/_layouts/Navigation/Navigation';
import { Box } from '@material-ui/core';

interface IProps {
    pageName?: string;
}

export const ShopLayout: React.FC<IProps> = ({ children, pageName }) => {
    return (
        <styled.Wrapper>
            <Navigation />
            <Box pt={10} pb={10} pl={20} pr={20}>
                {pageName && (
                    <styled.HeaderWrapper>
                        <styled.StyledHeader>{pageName}</styled.StyledHeader>
                    </styled.HeaderWrapper>
                )}
                {children}
            </Box>
        </styled.Wrapper>
    );
};
export default ShopLayout;
