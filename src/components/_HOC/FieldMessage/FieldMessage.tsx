import React from 'react';
import { AdditionalText, Content, ErrorMessage } from './FieldMessage.styled';
import { FieldError } from 'react-hook-form';

interface IProps {
    additionalText?: React.ReactNode;
    centered?: boolean;
    name: string;
    errors?: any;
    marginBottom?: number;
}

export default <P extends object>(
    Component: React.ComponentType<P>,
    staticPosition?: boolean,
): React.FC<P & IProps> => ({ ...props }) => {
    const {
        additionalText,
        centered = false,
        errors,
        marginBottom = 24,
    } = props;

    return (
        <Content {...{ staticPosition }}>
            <Component {...(props as P)} />
            {errors ? (
                <ErrorMessage
                    position={marginBottom}
                    {...{ centered, staticPosition }}
                >
                    {errors?.label?.message ?? errors.message}
                </ErrorMessage>
            ) : (
                additionalText && (
                    <AdditionalText
                        position={marginBottom}
                        {...{ staticPosition }}
                    >
                        {additionalText}
                    </AdditionalText>
                )
            )}
        </Content>
    );
};
