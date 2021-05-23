export const setJwt = (token: string) => {
    localStorage.setItem('jwtToken', token);
};

export const getJwt = () => {
    return localStorage.getItem('jwtToken');
};

export const removeJwt = () => {
    return localStorage.removeItem('jwtToken');
};
