import { Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';
import { Paper } from '@material-ui/core';

export const Container = styled(Paper)(({ theme }) => css``);

export const RegisterHeader = styled(Header)(
    ({ theme }) => css`
        text-align: center;
        padding-top: 16px;
    `,
);

export {};
