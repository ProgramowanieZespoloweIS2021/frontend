export type User = {
    username: string;
};

export type UserModule = {
    authorized: boolean | null;
};

export const initialState: UserModule = {
    authorized: null,
};
