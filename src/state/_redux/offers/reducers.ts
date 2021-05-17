import { createReducer } from 'typesafe-actions';
import { IOfferBrief, ITag } from '@@types/models/Offer';
import { getAllTags, getOffers } from '@state/_redux/offers/actions';

export type TOffersReducer = {
    tags: ITag[];
    totalNumberOfOffers: number;
    offers: IOfferBrief[];
};

const initialState: TOffersReducer = {
    tags: [],
    totalNumberOfOffers: 0,
    offers: [],
};

export const OffersReducer = createReducer(initialState)
    .handleAction(getAllTags.success, (state, { payload }) => ({
        ...state,
        tags: payload,
    }))
    .handleAction(
        getOffers.success,
        (state, { payload: { totalNumberOfOffers, offers } }) => ({
            ...state,
            totalNumberOfOffers,
            offers,
        }),
    );
