import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const CloseButton = styled.button`
    align-self: center;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    display: flex;
    margin: 0;
    outline: none;
    padding: 0;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
`;

export const StyledToastContainer = styled(ToastContainer)`
    max-width: 386px;
    min-width: 300px;
    transition: all ${({ theme }) => theme.transitions.default};
    width: max-content;

    .Toastify {
        &__toast {
            border-radius: ${({ theme }) => theme.borderRadius.default}px;
            font-size: ${({ theme }) => theme.fontSizes.m}px;
            font-weight: ${({ theme }) => theme.fontWeights.semiBold};
            line-height: 24px;
            min-height: 50px;
            padding: 20px 72px 20px 24px;
            text-align: left;

            &--default,
            &--warning {
                color: ${({ theme }) => theme.colors.text};

                path {
                    fill: ${({ theme }) => theme.colors.text};
                }
            }

            &--warning {
                background: ${({ theme }) => theme.colors.text};
            }

            &--default {
                background: ${({ theme }) => theme.colors.text};
            }

            &--success {
                background: ${({ theme }) => theme.colors.text};
            }

            &--error {
                background: ${({ theme }) => theme.colors.error};
            }
        }

        &__toast-body {
            margin: 0;
            padding: 0;
        }
    }
`;
