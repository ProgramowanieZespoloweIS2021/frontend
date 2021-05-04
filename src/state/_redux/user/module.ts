export type User = {
    username: string;
};

export type UserModule = {
    authorized: boolean;
};

export const initialState: UserModule = {
    authorized: false,
};
