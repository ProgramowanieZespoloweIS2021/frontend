import { createReducer } from 'typesafe-actions';
import { ITag } from '@@types/models/Offer';
import { getAllTags } from '@state/_redux/offers/actions';

export type TOffersReducer = {
    tags: ITag[];
};

const initialState: TOffersReducer = {
    tags: [],
};

export const OffersReducer = createReducer(initialState).handleAction(
    getAllTags.success,
    (state, { payload }) => ({
        ...state,
        tags: payload,
    }),
);
