//TODO: Add proper types when backend will be ready
export interface IOffer {
    title: string;
    description: string;
    user: IUser;
    thumbnails: string[];
    tiers: ITier[];
    tags: ITag[];
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
