import React from 'react';
import {
    Logo,
    NavButton,
    NavButtonsWrapper,
    NavIconButton,
    Wrapper,
} from './Navigation.styled';
import paths from '@shared/paths';
import { useHistory } from 'react-router';

interface IProps {}

export const Navigation: React.FC<IProps> = ({ children }) => {
    const history = useHistory();

    return (
        <Wrapper>
            <Logo>Software Factory</Logo>
            <NavButtonsWrapper>
                <NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Home
                </NavButton>
                <NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Offers
                </NavButton>
                <NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Orders
                </NavButton>
                <NavButton
                    color="primary"
                    onClick={() => history.push(paths.home)}
                >
                    Messages
                </NavButton>
                <NavButton
                    color="primary"
                    onClick={() => history.push(paths.account)}
                >
                    Profile
                </NavButton>
                <NavIconButton
                    size={32}
                    name="ShoppingCart"
                    onClick={() => history.push(paths.cart)}
                />
            </NavButtonsWrapper>
        </Wrapper>
    );
};
export default Navigation;
