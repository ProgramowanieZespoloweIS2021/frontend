import styled, { css } from 'styled-components';
import { Header } from '@components/_universal/Typography.styled';
import { Button } from '@material-ui/core';
import IconButton from '@components/_universal/IconButton/IconButton';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div(
    ({ theme }) => css`
        height: 56px;
        width: 100%;
        position: fixed;
        z-index: 99;
        background: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
    `,
);

export const Logo = styled(Header)(
    ({ theme }) => css`
        color: ${theme.colors.primary};
        margin-left: 80px;
        font-weight: bold;
    `,
);

export const HomeLink = styled(Link)(
    ({ theme }) => css`
        text-decoration: none;
        font-size: ${theme.fontSizes.l}px;
        color: ${theme.colors.black};
        &:hover {
            color: ${theme.colors.primary};
        }
    `,
);

export const NavButtonsWrapper = styled.div`
    margin-right: 80px;
    display: flex;
    align-items: center;
`;

export const NavButton = styled(Button)(
    ({ theme }) => css`
        margin-right: 10px;
    `,
);

export const NavIconButton = styled(IconButton)(
    ({ theme }) => css`
        background-color: transparent;
    `,
);
