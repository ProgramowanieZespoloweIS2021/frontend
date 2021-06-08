import styled, { css } from 'styled-components';
import { Button, Chip } from '@material-ui/core';

export const OfferThumbnailCell = styled.div<{ url: string }>(
    ({ theme, url }) => css`
        width: 100px;
        height: 100px;
        background-image: url(${url});
        cursor: pointer;
    `,
);

export const DeleteButton = styled(Button)(
    ({ theme }) => css`
        && {
            background: ${theme.colors.error};
        }
    `,
);

export const Tag = styled(Chip)`
    text-transform: capitalize;

    && {
        margin-right: 8px;
    }
`;
