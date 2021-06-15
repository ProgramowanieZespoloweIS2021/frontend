import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthorized } from '@state/_redux/user/selectors';
import { getUser } from '@state/_redux/user/actions';

interface IProps {}

export const AuthContainer: React.FC<IProps> = ({ children }) => {
    const isAuth = useSelector(isAuthorized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser.request(''));
    }, []);

    return <>{isAuth !== null && children}</>;
};
