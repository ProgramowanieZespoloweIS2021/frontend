import { Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';
import {
    Paper,
    Divider as DividerMui,
    Typography,
    Grid,
    Button as ButtonMui,
} from '@material-ui/core';

export const Container = styled(Paper)(
    ({ theme }) => css`
        display: flex;
        flex-flow: column;
        align-items: center;
    `,
);

export const LoginHeader = styled(Header)(
    ({ theme }) => css`
        text-align: center;
        padding-top: 16px;
    `,
);

export const Divider = styled(DividerMui)(
    ({ theme }) => css`
        width: 100%;
    `,
);

export const InfoText = styled(Typography)(
    ({ theme }) => css`
        text-align: center;
        padding-bottom: 8px;
    `,
);

export const RegisterWrapper = styled(Grid)(
    ({ theme }) => css`
        padding: 16px;
        width: 100%;
    `,
);

export const Button = styled(ButtonMui)`
    width: 100%;
`;

export const Wrapper = styled(Grid)(
    ({ theme }) => css`
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
    `,
);

export {};
