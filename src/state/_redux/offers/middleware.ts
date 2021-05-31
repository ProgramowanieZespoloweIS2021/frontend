import {
    createOffer,
    getAllTags,
    getOfferDetails,
    getOffers,
} from '@state/_redux/offers/actions';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { API } from '@utils/api';
import { TState } from '../../../boot/configureStore';
import { getType } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { IOfferParams } from '@@types/models/Offer';
import { createTagsUrl } from '@utils/helpers';

const API_URL = 'http://localhost:8080';

export const getAllTagsRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        const response = await API.get(API_URL, 'offers/tags');
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
        const response = await API.postAuth(API_URL, 'offers', data);
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
        const {
            pagination: { limit, offset },
            sortFilter,
        }: IOfferParams = action.payload;
        if (sortFilter) {
            const { direction, field, maxPrice, minPrice, tags } = sortFilter;
            const tagsUrl = createTagsUrl(tags);
            const params = {
                limit,
                offset,
                order_by: `${direction}:${field}`,
                min_price: `gt:${minPrice},lt:${maxPrice}`,
                tags: tagsUrl,
            };
            const response = await API.get(API_URL, 'offers', params);
            dispatch(getOffers.success(response.data));
            return;
        }
        const response = await API.get(API_URL, 'offers', { limit, offset });
        dispatch(getOffers.success(response.data));
    } catch (err) {
        dispatch(getOffers.failure(err));
    }
};

export const getOfferDetailsRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const offerId: number = action.payload;
    try {
        const response = await API.get(API_URL, `offers/${offerId}`);
        dispatch(getOfferDetails.success(response.data));
    } catch (err) {
        dispatch(getOfferDetails.failure(err));
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

export const getOfferDetailsMiddleware: Middleware<{}, TState> = ({
    dispatch,
}) => (next) => async (action: AnyAction) => {
    if (action.type === getType(getOfferDetails.request)) {
        await getOfferDetailsRequest(action, dispatch);
    }
    return next(action);
};
