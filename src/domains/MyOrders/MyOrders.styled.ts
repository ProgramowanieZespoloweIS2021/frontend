import styled, { css } from 'styled-components';
import Select from 'react-select';
import { Header } from '@components/_universal/Typography.styled';
import TableContainer from '@material-ui/core/TableContainer';

export {};

export const StyledSelect = styled(Select)`
    width: 150px;
    z-index: 999;
    margin-right: 32px;
`;

export const StyledHeader = styled(Header)(
    ({ theme }) => css`
        margin-bottom: 40px;
    `,
);

export const StyledTableContainer = styled(TableContainer)`
    height: 100%;
`;
