import { CardActions, CardMedia, Box } from '@material-ui/core';
import { DefaultText, Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';

export const SliderContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 15rem;
        margin-right: 2rem;
    `,
);

export const SortingLabel = styled(DefaultText)(
    ({ theme }) => css`
        margin-right: 1rem;
    `,
);

export const CardImage = styled(CardMedia)(
    ({ theme }) => css`
        padding-top: 56.25%;
    `,
);

export const CardTitle = styled(Header)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.l}px;
    `,
);

export const UserRatesNumber = styled(DefaultText)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.s}px;
        color: ${theme.colors.optionalText};
        margin-left: 0.25rem;
    `,
);

export const CardUsername = styled(DefaultText)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.m}px;
        margin-left: 0.5rem;
    `,
);

export const CardDescription = styled(DefaultText)(({ theme }) => css``);

export const CardBottomActions = styled(CardActions)(
    ({ theme }) => css`
        display: flex;
        justify-content: space-between;
    `,
);
