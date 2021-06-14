import styled, { css } from 'styled-components';
import { DefaultText, Header } from '@components/_universal/Typography.styled';
import { Chip, Tab, TextField } from '@material-ui/core';
import { IconManager } from '@components/_universal';

export {};

export const UserInfoCard = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        box-shadow: ${theme.default_shadow};
        padding: 16px;
        margin-bottom: 40px;
    `,
);

export const OfferName = styled(Header)(
    ({ theme }) => css`
        margin-bottom: 40px;
    `,
);

export const LetterCircle = styled.div(
    ({ theme }) => css`
        border-radius: 50%;
        color: ${theme.colors.app_bg};
        background-color: ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-right: 8px;
        font-weight: ${theme.fontWeights.bold};
    `,
);

export const UserName = styled(DefaultText)(
    ({ theme }) => css`
        margin-right: 8px;
    `,
);

export const RateValueText = styled(DefaultText)(
    ({ theme }) => css`
        color: ${theme.colors.rating};
        margin-right: 8px;
    `,
);

export const RateCountText = styled(DefaultText)(
    ({ theme }) => css`
        color: ${theme.colors.optionalText};
        margin-right: 8px;
    `,
);

export const OfferThumbnail = styled.div<{ url: string }>(
    ({ theme, url }) => css`
        width: 100%;
        height: 400px;
        background-image: url(${url});
        background-size: cover;
        object-fit: cover;
        box-shadow: ${theme.default_shadow};
        margin-bottom: 40px;
    `,
);

export const OfferDescription = styled(DefaultText)(
    ({ theme }) => css`
        color: ${theme.colors.optionalText};
    `,
);

export const OfferOptions = styled.div(
    ({ theme }) => css`
        box-shadow: ${theme.default_shadow};
    `,
);

export const TabButton = styled(Tab)`
    flex: 1;
`;

export const TabPanel = styled.div`
    padding: 32px;
`;

export const OfferShortName = styled(Header)``;

export const TechnologyChip = styled(Chip)`
    text-transform: capitalize;

    && {
        margin-right: 8px;
    }
`;

export const IconMargin = styled(IconManager)`
    margin-right: 8px;
`;

export const ItemDescriptionTextField = styled(TextField)`
    && {
        width: 100%;
        margin-bottom: 15px;
    }
`;
