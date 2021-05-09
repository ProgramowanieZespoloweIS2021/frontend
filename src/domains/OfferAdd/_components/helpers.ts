import { IOfferRequestBody } from '@@types/models/Offer';
import { IAddOfferForm } from '@domains/OfferAdd/_components/useLogic';

export const offerFormToModel = (
    formData: IAddOfferForm,
): IOfferRequestBody => ({
    ...formData,
    ...{ tags: formData.tags.map((el) => el.value) },
    //TODO : Change ownerId
    ownerId: 1,
});
