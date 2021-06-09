export type User = {
    id: number;
    email: string;
    firstName: string;
    surname: string;
};

export type UserModule = {
    authorized: boolean | null;
    id: number;
};

export const initialState: UserModule = {
    authorized: null,
    id: 0,
};
