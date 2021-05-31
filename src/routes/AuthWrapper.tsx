import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthorized } from '@state/_redux/user/selectors';
import { getUser } from '@state/_redux/user/actions';

interface IProps {}

export const AuthWrapper: React.FC<IProps> = ({ children }) => {
    const history = useHistory();
    // const authorized = useSelector(isAuthorized);
    const authorized = true;
    const dispatch = useDispatch();

    const checkAuth = async () => await dispatch(getUser.request(''));

    useEffect(() => {
        // checkAuth();
    }, []);

    return <>{authorized && children}</>;
};
