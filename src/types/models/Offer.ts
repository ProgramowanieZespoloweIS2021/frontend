//TODO: Add proper types when backend will be ready
export interface IOffer {
    id: number;
    user: IUser;
    title: string;
    description: string;
    creationTimestamp: Date;
    tiers: ITier[];
    tags: ITag[];
    thumbnails: IThumbnail[];
    archived: boolean;
}

interface IThumbnail {
    id: number;
    url: string;
}

//TODO: Export these types to another models, when backend will be ready
interface ITier {
    id?: number;
    title: string;
    description: string;
    price: number;
    deliveryTime: number;
}

interface IUser {
    id?: number;
    firstName: string;
    surname: string;
    email: string;
}

interface ITag {
    name: string;
}
