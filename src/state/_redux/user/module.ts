export type User = {
    username: string;
};

export type UserModule = {
    authorized: boolean | null;
    id: number;
};

export const initialState: UserModule = {
    authorized: null,
    id: 0,
};
