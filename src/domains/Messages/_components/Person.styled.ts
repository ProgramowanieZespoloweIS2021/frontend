import styled, { css } from 'styled-components';

import { Button } from '@material-ui/core';

export const Container = styled(Button)(
    ({ theme }) => css`
        width: 100%;

        && {
            padding: 16px 0;
        }
    `,
);
