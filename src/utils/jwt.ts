export const setJwt = (token: string) => {
    localStorage.setItem('jwtToken', token);
};
export const getJwt = () => {
    localStorage.getItem('jwtToken');
};
