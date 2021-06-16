import {
    CardActions,
    CardMedia,
    Box,
    Chip,
    TextField,
    FormHelperText,
    FormControl,
    Button,
    InputLabel,
} from '@material-ui/core';
import { DefaultText, Header } from '@components/_universal/Typography.styled';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export const ReactSelect = styled(Select)(
    ({ theme }) => css`
        && {
            width: 100%;
            margin-right: 10px;
        }

        &&:last-child {
            margin: 0;
        }
    `,
);

export const Label = styled(InputLabel)(
    ({ theme }) => css`
        && {
            color: ${theme.colors.primary};
            margin-bottom: 10px;
        }
    `,
);

export const Input = styled(TextField)(
    ({ theme }) => css`
        width: 100%;
        && {
            margin-bottom: 8px;
        }
        & input {
            background-color: ${theme.colors.white};
        }

        & label {
            color: ${theme.colors.primary};
        }
        & p {
            color: ${theme.colors.primary};
        }
        &:first-child {
            margin-right: 5px;
        }
    `,
);

export const SelectControl = styled(FormControl)(
    ({ theme }) => css`
        width: 100%;

        & label {
            color: ${theme.colors.primary};
        }
    `,
);

export const SliderContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 15rem;
        margin-right: 2rem;
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

export const ClearButton = styled(Button)(
    ({ theme }) => css`
        && {
            margin-left: 10px;
        }
    `,
);
