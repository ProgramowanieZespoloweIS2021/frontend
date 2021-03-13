import styled, { css } from 'styled-components';
import { DefaultText } from '@components/_universal/Typography.styled';

const DEFAULT_ERROR_BOTTOM = 3;

export const staticPositionStyle = css`
    margin-top: 5px;
    position: static;
    text-align: left;
`;

export const Content = styled.div<{
    staticPosition?: boolean;
}>`
    position: relative;
    ${({ staticPosition }) => !staticPosition && 'display: flex'};
`;
export const FieldMessage = styled(DefaultText) <{
    centered?: boolean;
    position?: number;
    staticPosition?: boolean;
}>`
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    left: 0;
    line-height: 1.65;
    margin: 0;
    top: calc(
        100%
            ${({ position }) =>
        position && position !== 0
            ? `- ${position - DEFAULT_ERROR_BOTTOM}px`
            : `+ ${DEFAULT_ERROR_BOTTOM}px`}
    );
    padding: 0 25px;
    position: absolute;
    width: 100%;
    ${({ centered }) => centered && 'text-align: center'}
    ${({ staticPosition }) => staticPosition && staticPositionStyle}
`;

export const ErrorMessage = styled(FieldMessage)`
    color: ${({ theme }) => theme.colors.error};
`;
export const AdditionalText = styled(FieldMessage)`
    color: ${({ theme }) => theme.colors.text};
`;
