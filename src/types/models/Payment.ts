export interface IPayment {
    id: number;
    userId: number;
    price: number;
    status: string;
    updateTime: Date;
    offerTitles: string[];
    createTime: Date;
    links: ILink[];
}

export interface IPaymentRequest {
    paymentId: number;
    email: string;
    name: string;
    surname: string;
    cardNumber: string;
    expirationDate: string;
    codeCvv: string;
}

export interface ILink {
    rel: string;
    href: string;
}
