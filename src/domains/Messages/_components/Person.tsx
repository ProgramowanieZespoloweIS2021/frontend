import React from 'react';

import { Container } from './Person.styled';

interface IPerson {
    email: string;
    onClick: () => void;
}

const Person = ({ email, onClick }: IPerson) => {
    return (
        <Container variant="text" color="primary" onClick={onClick}>
            {email}
        </Container>
    );
};

export default Person;
