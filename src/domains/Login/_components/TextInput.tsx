import React from 'react';

import { Grid, TextFieldProps } from '@material-ui/core';

import * as styled from './Form.styled';

export const TextInput = (props: TextFieldProps) => {
    return (
        <Grid item>
            <styled.Input {...props} />
        </Grid>
    );
};

export default TextInput;
