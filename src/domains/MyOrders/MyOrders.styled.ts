import styled, { css } from 'styled-components';
import Select from 'react-select';

export {};

export const StyledSelect = styled(Select)(
    ({ theme, url }) => css`
        width: 150px;
        z-index: 999;
        margin-right: 32px;
    `,
);
