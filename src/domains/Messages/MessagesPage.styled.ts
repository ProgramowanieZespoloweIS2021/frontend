import styled, { css } from 'styled-components';

import { Paper } from '@material-ui/core';

export const MessagesList = styled.div(
    ({ theme }) => css`
        height: 400px;
        padding: 8px;
        overflow-y: scroll;
    `,
);

export const PeopleList = styled(Paper)(
    ({ theme }) => css`
        height: 496px;
        padding: 16px;
    `,
);

export const MessagesContainer = styled(Paper)(
    ({ theme }) => css`
        padding: 16px;
    `,
);
