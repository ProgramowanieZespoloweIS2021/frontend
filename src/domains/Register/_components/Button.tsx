import React from 'react';

import { Grid, ButtonProps } from '@material-ui/core';

import * as styled from './Form.styled';

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <Grid item>
            <styled.Button {...rest}>{children}</styled.Button>
        </Grid>
    );
};

export default Button;
