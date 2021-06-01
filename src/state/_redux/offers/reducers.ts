import { createReducer } from 'typesafe-actions';
import { IOfferBrief, IOfferDetails, ITag } from '@@types/models/Offer';
import {
    getAllTags,
    getOffers,
    getOfferDetails,
    getMyOffers,
    deleteOffer,
} from '@state/_redux/offers/actions';

export type TOffersReducer = {
    tags: ITag[];
    totalNumberOfOffers: number;
    offers: IOfferBrief[];
    offerDetails: IOfferDetails | null;
};

const initialState: TOffersReducer = {
    tags: [],
    totalNumberOfOffers: 0,
    offers: [],
    offerDetails: null,
};

export const OffersReducer = createReducer(initialState)
    .handleAction(getAllTags.success, (state, { payload }) => ({
        ...state,
        tags: payload,
    }))
    .handleAction(
        [getOffers.success, getMyOffers.success],
        (state, { payload: { totalNumberOfOffers, offers } }) => ({
            ...state,
            totalNumberOfOffers,
            offers,
        }),
    )
    .handleAction(getOfferDetails.success, (state, { payload }) => ({
        ...state,
        offerDetails: payload,
    }))
    .handleAction(deleteOffer.success, (state, { payload }) => ({
        ...state,
        offers: state.offers.filter((offer) => offer.id !== payload),
    }));
