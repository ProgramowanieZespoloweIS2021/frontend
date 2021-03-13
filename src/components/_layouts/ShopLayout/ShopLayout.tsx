import React from 'react';
import * as styled from './ShopLayout.styled';

interface IProps {}

export const ShopLayout: React.FC<IProps> = ({ children }) => {
    return <styled.Wrapper>{children}</styled.Wrapper>;
};
export default ShopLayout;
