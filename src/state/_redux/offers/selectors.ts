import { createSelector } from 'reselect';
import { DefaultRootState } from 'react-redux';
import { TOffersReducer } from '@state/_redux/offers/reducers';

const selectOffersModule = createSelector(
    ({ offers }: DefaultRootState): TOffersReducer => offers,
    (offers) => offers,
);

export const selectAllTags = createSelector(
    selectOffersModule,
    (offersReducer) =>
        offersReducer.tags.map(({ name }) => ({
            value: name,
            label: name,
        })),
);

export const selectOffers = createSelector(
    selectOffersModule,
    (offersReducer) => offersReducer.offers,
);

export const selectTotalNumberOfOffers = createSelector(
    selectOffersModule,
    (offersReducer) => offersReducer.totalNumberOfOffers,
);

export const selectOfferDetails = createSelector(
    selectOffersModule,
    (offersReducer) => offersReducer.offerDetails,
);
