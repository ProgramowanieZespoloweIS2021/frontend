import styled, { css } from 'styled-components';
import { Header } from '@components/_universal/Typography.styled';

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.app_bg};
    width: 100%;
    min-height: 100vh;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;
    margin-top: 48px;
    text-transform: capitalize;
    font-weight: bold;
`;

export const StyledHeader = styled(Header)(
    ({ theme }) => css`
        text-align: center;
    `,
);
