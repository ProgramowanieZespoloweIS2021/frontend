import { createSelector } from 'reselect';
import { DefaultRootState } from 'react-redux';
import { TCartReducer } from './reducers';

const cart = ({ cart }: TCartReducer) => cart;
