import React from 'react';
import { ButtonWrapper } from './IconButton.styled';
import { IconName } from '@@types/CommonTypes';
import IconManager from '../IconManager/IconManager';

interface IProps {
    className?: string;
    name?: IconName;
    onClick?: () => void;
    size: number;
}

const IconButton: React.FC<IProps> = ({ className, name, onClick, size }) => {
    return (
        <ButtonWrapper {...{ className, onClick, size }}>
            <IconManager {...{ size, name }} />
        </ButtonWrapper>
    );
};

export default IconButton;
