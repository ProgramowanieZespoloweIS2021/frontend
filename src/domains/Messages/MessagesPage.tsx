import React from 'react';
import { Grid } from '@material-ui/core';
// import Message from './_components/Message';

interface IProps {}

const MessagesPage: React.FC<IProps> = () => {
    return (
        <>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={6}>
                    messages
                </Grid>
            </Grid>
        </>
    );
};

export default MessagesPage;
