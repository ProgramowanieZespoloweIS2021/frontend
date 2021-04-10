import React from 'react';
import { Box, Button } from '@material-ui/core';
import Header from '@domains/Dashboard/_components/Header';

interface IProps {}

const DashboardPage: React.FC<IProps> = () => {
    return (
        <>
            <Box m={4}>
                <Header>Hello from header component</Header>
                <Button color="primary">Test button</Button>
            </Box>
        </>
    );
};

export default DashboardPage;
