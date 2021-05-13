import {
    createOffer,
    getAllTags,
    getOffers,
} from '@state/_redux/offers/actions';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { API } from '@utils/api';
import { TState } from '../../../boot/configureStore';
import { getType } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { IOfferSortFilterParams } from '@@types/models/Offer';
import { createTagsUrl } from '@utils/helpers';

export const getAllTagsRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        const response = await API.get('offers/tags');
        dispatch(getAllTags.success(response.data));
    } catch (err) {
        dispatch(getAllTags.failure(err));
    }
};

// TODO: Add authorization
export const createOfferRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const data = action.payload;
    try {
        const response = await API.postAuth('offers', data);
        dispatch(createOffer.success(response.data));
        toast.success('Offer has been added.');
        return true;
    } catch (err) {
        dispatch(createOffer.failure(err));
        return false;
    }
};

export const getOffersRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        if (action.payload) {
            const data: IOfferSortFilterParams = action.payload;
            const tagsUrl = createTagsUrl(data.tags);
            const params = {
                order_by: `${data.direction}:${data.field}`,
                min_price: `gt:${data.minPrice},lt:${data.maxPrice}`,
                tags: tagsUrl,
            };
            const response = await API.get('offers', params);
            dispatch(getOffers.success(response.data));
            return;
        }
        const response = await API.get('offers');
        dispatch(getOffers.success(response.data));
    } catch (err) {
        dispatch(getOffers.failure(err));
    }
};

export const getAllTagsMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getAllTags.request)) {
        await getAllTagsRequest(action, dispatch);
    }
    return next(action);
};

export const createOfferMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(createOffer.request)) {
        await createOfferRequest(action, dispatch);
    }
    return next(action);
};

export const getOffersMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getOffers.request)) {
        await getOffersRequest(action, dispatch);
    }
    return next(action);
};
