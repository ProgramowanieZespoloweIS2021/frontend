import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDetails } from '@state/_redux/user/selectors';
import { getUser } from '@state/_redux/user/actions';

interface IProps {}

export const AuthContainer: React.FC<IProps> = ({ children }) => {
    const { id } = useSelector(selectUserDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser.request(''));
    }, []);

    return <>{id && children}</>;
};
