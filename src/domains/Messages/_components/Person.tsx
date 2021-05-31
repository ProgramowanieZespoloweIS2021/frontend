import React from 'react';

import { Container } from './Person.styled';

interface IPerson {
    email: string;
}

const Person = ({ email }: IPerson) => {
    return (
        <Container variant="text" color="primary">
            {email}
        </Container>
    );
};

export default Person;
