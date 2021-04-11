//TODO: Add proper types when backend will be ready
export interface IOffer {
    name: string;
    shortName: string;
    description: string;
    user: IUser;
    thumbnails: [];
    tiers: ITier[];
    tags: ITag[];
}

//TODO: Export these types to another models, when backend will be ready
interface ITier {
    type: string;
    price: number;
    deliveryTime: number;
}

interface IUser {
    name: string;
    lastName: string;
    averageRate: number;
    ratesNumber: number;
}

interface ITag {
    name: string;
}
