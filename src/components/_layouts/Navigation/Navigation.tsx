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
import { useDispatch, useSelector } from 'react-redux';
import { removeJwt } from '@utils/jwt';
import { logoutUser } from '@state/_redux/user/actions';
import { isAuthorized } from '@state/_redux/user/selectors';

interface IProps {}

export const Navigation: React.FC<IProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isUserAuthorized = useSelector(isAuthorized);

    const handleLogout = async () => {
        await dispatch(logoutUser.request(null));
        removeJwt();
    };

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
                {isUserAuthorized && (
                    <NavButton
                        color="primary"
                        onClick={() => history.push(paths.home)}
                    >
                        Orders
                    </NavButton>
                )}
                {isUserAuthorized && (
                    <NavButton
                        color="primary"
                        onClick={() => history.push(paths.home)}
                    >
                        Messages
                    </NavButton>
                )}
                {isUserAuthorized && (
                    <NavButton
                        color="primary"
                        onClick={() => history.push(paths.account)}
                    >
                        Profile
                    </NavButton>
                )}
                {isUserAuthorized && (
                    <NavButton color="primary" onClick={handleLogout}>
                        Logout
                    </NavButton>
                )}
                {isUserAuthorized && (
                    <NavIconButton
                        size={32}
                        name="ShoppingCart"
                        onClick={() => history.push(paths.cart)}
                    />
                )}
            </NavButtonsWrapper>
        </Wrapper>
    );
};
export default Navigation;
