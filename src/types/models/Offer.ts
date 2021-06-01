export interface IOffer {
    title: string;
    description: string;
    user: IUser;
    thumbnails: string[];
    tiers: ITier[];
    tags: ITag[];
}

export interface IOfferDetails {
    id: number;
    ownerId: number;
    title: string;
    description: string;
    creationTimestamp: Date;
    tiers: ITier[];
    tags: ITag[];
    thumbnails: IThumbnail[];
    archived: boolean;
}

export interface IOfferReport {
    totalNumberOfOffers: number;
    offers: IOfferBrief[];
}

export interface IOfferBrief {
    id: number;
    ownerId: number;
    name: string;
    minimalPrice: number;
    tags: ITag[];
    thumbnails: IThumbnail[];
}

export interface IThumbnail {
    id: number;
    url: string;
}

//TODO: Export these types to another models, when backend will be ready
interface ITier {
    id: number;
    title: string;
    description: string;
    price: number;
    deliveryTime: number;
}

interface IUser {
    name: string;
    lastName: string;
    averageRate: number;
    ratesNumber: number;
}

export interface ITag {
    name: string;
}

export interface IOfferRequestBody {
    title: string;
    description: string;
    ownerId: number;
    tags: string[];
    thumbnails: string[];
    tiers: ITier[];
}

export interface IOfferPagination {
    limit: number;
    offset: number;
}

export interface IOfferSortFilter {
    direction: string;
    field: string;
    minPrice: number;
    maxPrice: number;
    tags: ITag[];
}

export interface IOfferParams {
    pagination: IOfferPagination;
    sortFilter: IOfferSortFilter | null;
}
