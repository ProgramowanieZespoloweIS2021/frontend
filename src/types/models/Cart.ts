export interface ICart {
    id: number;
    totalPrice: number;
    items: ICartItemDetails[];
}

export interface ICartItemDetails {
    id: number;
    description: string;
    offerId: number;
    offerOwnerId: number;
    offerTitle: string;
    tierId: number;
    tierTitle: string;
    tierPrice: number;
}

export interface ICartItemRequest {
    offerId: number;
    tierId: number;
    description: string;
}

export interface ICartSubmissionRequest {
    cartId: number;
    buyerId: number;
}
