import React, { useState } from 'react';
import { IconWrapper } from './IconManager.styled';
import { IconName, ColorType, CursorType } from '@@types/CommonTypes';
import { ThemeContext } from 'styled-components';
import * as Icons from '@shared/svgs/Icons';

interface IProps {
    activeFill?: ColorType[];
    activeStroke?: number;
    center?: boolean;
    className?: string;
    cursor?: CursorType;
    fill?: ColorType[];
    hoverFill?: ColorType[];
    isActive?: boolean;
    name?: IconName;
    onClick?: () => void;
    rotate?: number;
    size: number;
    sizeY?: number;
}

const IconManager: React.FC<IProps> = ({
    activeFill,
    activeStroke,
    center,
    className,
    cursor,
    fill,
    hoverFill,
    isActive,
    name,
    onClick,
    rotate,
    size,
    sizeY,
}) => {
    const [isHover, setIsHover] = useState(false);

    const Icon = Icons[name || 'Close'];
    const colors: { [key in ColorType]: string } = React.useContext(
        ThemeContext,
    ).colors;
    const iconColor = fill && fill.map((item) => colors[item]);
    const iconActiveColor =
        activeFill && activeFill.map((item) => colors[item]);
    const iconHoverColor = hoverFill && hoverFill.map((item) => colors[item]);

    const handleSetHover = (value: boolean) =>
        iconHoverColor && setIsHover(value);

    return (
        <IconWrapper
            onMouseEnter={() => handleSetHover(true)}
            onMouseLeave={() => handleSetHover(false)}
            {...{
                center,
                className,
                cursor,
                onClick,
                rotate,
                size,
            }}
        >
            <Icon
                fill={
                    isActive
                        ? iconActiveColor
                        : isHover
                        ? iconHoverColor
                        : iconColor
                }
                activeStroke={
                    isActive && activeStroke ? activeStroke : undefined
                }
                {...{ sizeY }}
            />
        </IconWrapper>
    );
};

export default IconManager;
