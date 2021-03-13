import styled from 'styled-components';
import { CursorType } from '@@types/CommonTypes';

export const ButtonWrapper = styled.button<{ className?: string }>`
    border: none;
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    cursor: pointer;
    padding: 0;
`;
