import { Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';

export const OfferAddHeader = styled(Header)(
    ({ theme }) => css`
        text-align: center;
        padding-top: 16px;
    `,
);
