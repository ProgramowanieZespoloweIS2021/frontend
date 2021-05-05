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
