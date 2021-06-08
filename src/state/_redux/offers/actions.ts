import { createAsyncAction } from 'typesafe-actions';
import {
    IOfferDetails,
    IOfferReport,
    IOfferRequestBody,
    IOfferParams,
    ITag,
} from '@@types/models/Offer';

export const getAllTags = createAsyncAction(
    'GET_ALL_TAGS_REQUEST',
    'GET_ALL_TAGS_SUCCESS',
    'GET_ALL_TAGS_FAILURE',
)<null, ITag[], string>();

export const getOffers = createAsyncAction(
    'GET_OFFERS_REQUEST',
    'GET_OFFERS_SUCCESS',
    'GET_OFFERS_FAILURE',
)<IOfferParams, IOfferReport, string>();

export const getMyOffers = createAsyncAction(
    'GET_MY_OFFERS_REQUEST',
    'GET_MY_OFFERS_SUCCESS',
    'GET_MY_OFFERS_FAILURE',
)<number, IOfferReport, string>();

export const getOfferDetails = createAsyncAction(
    'GET_OFFER_DETAILS_REQUEST',
    'GET_OFFER_DETAILS_SUCCESS',
    'GET_OFFER_DETAILS_FAILURE',
)<number, IOfferDetails, string>();

export const createOffer = createAsyncAction(
    'CREATE_OFFER_REQUEST',
    'CREATE_OFFER_SUCCESS',
    'CREATE_OFFER_FAILURE',
)<IOfferRequestBody, string, string>();

export const updateOffer = createAsyncAction(
    'UPDATE_OFFER_REQUEST',
    'UPDATE_OFFER_SUCCESS',
    'UPDATE_OFFER_FAILURE',
)<IOfferRequestBody, string, string>();

export const deleteOffer = createAsyncAction(
    'DELETE_OFFER_REQUEST',
    'DELETE_OFFER_SUCCESS',
    'DELETE_OFFER_FAILURE',
)<number, number, number>();
