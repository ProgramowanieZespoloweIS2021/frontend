import React from 'react';
import { useSelector } from 'react-redux';

import { isAuthorized } from '@state/_redux/user/selectors';

interface IProps {
    children: any;
}

const ProtectedComponent: React.FC<IProps> = ({ children }) => {
    const authorized = useSelector(isAuthorized);

    return authorized && children;
};

export default ProtectedComponent;
