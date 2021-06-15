export interface IOrder {
    offer: any;
    buyer: {
        firstName: string;
        surname: string;
        email: string;
    };
    seller: {
        firstName: string;
        surname: string;
        email: string;
    };
    selectedTierId: number;
    id: number;
    description: string;
    state: string;
}

export interface IOrderUpdateRequestBody {
    id: number;
    status: string;
}
