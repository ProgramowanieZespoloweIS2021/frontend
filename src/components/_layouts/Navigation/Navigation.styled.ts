import styled, { css } from 'styled-components';
import { Header } from '@components/_universal/Typography.styled';

export const Wrapper = styled.div(
    ({ theme }) => css`
        height: 56px;
        width: 100%;
        position: fixed;
        z-index: 99;
        box-shadow: ${theme.default_shadow};
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
    `,
);

export const NavButtonsWrapper = styled.div`
    margin-right: 80px;
    display: flex;
    align-items: center;
`;
