import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { CloseButton, StyledToastContainer } from './ToastNotification.styled';
import { IconManager } from '@components/_universal';
import { toast, ToastProps } from 'react-toastify';
import { ToastTypes } from '@@types/CommonTypes';

interface IProps {}

export const notify = (contentText: React.ReactNode | string) => {
    return {
        [ToastTypes.DEFAULT]: () => toast(contentText),
        [ToastTypes.ERROR]: () => toast.error(contentText),
        [ToastTypes.SUCCESS]: () => toast.success(contentText),
        [ToastTypes.WARNING]: () => toast.warn(contentText),
    };
};

const ToastNotification: React.FC<IProps> = () => {
    const customCloseButton = ({ closeToast }: ToastProps) => {
        return (
            <CloseButton onClick={closeToast}>
                <IconManager fill={['secondary']} name={'Close'} size={24} />
            </CloseButton>
        );
    };

    return (
        <StyledToastContainer
            closeButton={customCloseButton}
            hideProgressBar={true}
            position={'bottom-left'}
        />
    );
};

export default ToastNotification;
