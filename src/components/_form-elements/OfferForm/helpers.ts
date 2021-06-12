import { IOffer, IOfferDetails, IOfferRequestBody } from '@@types/models/Offer';
import { IAddOfferForm } from '@components/_form-elements/OfferForm/OfferForm';
import { Omit } from '@material-ui/core';

export const offerFormToModel = (
    formData: IAddOfferForm,
    userId: number,
): IOfferRequestBody => ({
    ...formData,
    ...{ tags: formData.tags.map((el) => el.value) },
    ownerId: userId,
});

export const offerModelToForm = (model: IOfferDetails): IAddOfferForm => ({
    ...model,
    ...{ tags: model.tags.map((el) => ({ label: el.name, value: el.name })) },
    ...{
        thumbnails: model.thumbnails.map((el) => el.url),
    },
});

// export interface IOfferRequestBody {
//        id: number;
//     ownerId: number;
//     title: string;
//     description: string;
//     creationTimestamp: Date;
//     tiers: ITier[];
//     tags: ITag[];
//     thumbnails: IThumbnail[];
//     archived: boolean;
// }

// export type IAddOfferForm = Omit<IOffer, 'user' | 'tags'> & {
//     tags: SelectOption[];
//     ownerId: number;
// };
