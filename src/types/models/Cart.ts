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
    cartId: number;
    cartItem: ICartItem;
}

export interface ICartItem {
    offerId: number;
    tierId: number;
    description: string;
}

export interface ICartSubmission {
    cartId: number;
    buyerId: number;
}
