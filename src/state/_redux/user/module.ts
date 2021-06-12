export type User = {
    id: number;
    email: string;
    firstName: string;
    surname: string;
};

export type UserModule = {
    authorized: boolean | null;
    id: number | null;
    email: string | null;
};

export const initialState: UserModule = {
    authorized: null,
    id: null,
    email: null,
};
