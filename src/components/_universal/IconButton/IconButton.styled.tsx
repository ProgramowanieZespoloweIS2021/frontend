import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
    className?: string;
    size: number;
}>`
    border: none;
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    cursor: pointer;
    padding: 0;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
