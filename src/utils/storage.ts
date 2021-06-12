export const setCartId = (token: string) => {
    localStorage.setItem('cartIdToken', token);
};

export const getCartId = () => {
    return localStorage.getItem('cartIdToken');
};

export const removeCartId = () => {
    return localStorage.removeItem('cartIdToken');
};

export const clearStorage = (): void => {
    localStorage.clear();
};
