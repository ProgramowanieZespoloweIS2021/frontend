import {
    CardActions,
    CardMedia,
    Box,
    Chip,
    TextField,
    FormHelperText,
    Select,
} from '@material-ui/core';
import { DefaultText, Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SliderContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 15rem;
        margin-right: 2rem;
    `,
);

export const Dropdown = styled(Select)(
    ({ theme }) => css`
        width: 100%;
        margin-bottom: 5px;
    `,
);

export const HelperText = styled(FormHelperText)(
    ({ theme }) => css`
        && {
            color: ${theme.colors.black};
            margin-bottom: 5px;
        }
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

export const CardLink = styled(Link)(
    ({ theme }) => css`
        text-decoration: none;
        font-size: ${theme.fontSizes.l}px;
        color: ${theme.colors.black};
        &:hover {
            color: ${theme.colors.primary};
        }
    `,
);

export const CardTitle = styled(Header)(({ theme }) => css``);

export const CardChip = styled(Chip)(
    ({ theme }) => css`
        margin-right: 5px;
        margin-bottom: 5px;
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

export const CardPriceText = styled(DefaultText)(
    ({ theme }) => css`
        margin-top: 10px;
    `,
);

export const CardBottomActions = styled(CardActions)(
    ({ theme }) => css`
        display: flex;
        justify-content: space-between;
        padding: 16px;
    `,
);
