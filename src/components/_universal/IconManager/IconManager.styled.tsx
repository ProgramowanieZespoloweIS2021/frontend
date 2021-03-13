import styled from 'styled-components';
import { CursorType } from '@@types/CommonTypes';

export const IconWrapper = styled.span<{
    rotate?: number;
    center?: boolean;
    size: number;
    cursor?: CursorType; 
}>`
    display: flex;
    font-size: ${({ size }) => size}px;
    ${({ center }) => center && `align-self: center;`};
    ${({ cursor, theme }) => cursor && `cursor: ${theme.cursors[cursor]}`};
    ${({ rotate }) => rotate && `transform: rotate(${rotate}deg)`};
`;
