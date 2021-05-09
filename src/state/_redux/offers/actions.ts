import { createAsyncAction } from 'typesafe-actions';
import { IOfferRequestBody, ITag } from '@@types/models/Offer';

export const getAllTags = createAsyncAction(
    'GET_ALL_TAGS_REQUEST',
    'GET_ALL_TAGS_SUCCESS',
    'GET_ALL_TAGS_FAILURE',
)<null, ITag[], string>();

export const createOffer = createAsyncAction(
    'CREATE_OFFER_REQUEST',
    'CREATE_OFFER_SUCCESS',
    'CREATE_OFFER_FAILURE',
)<IOfferRequestBody, string, string>();
