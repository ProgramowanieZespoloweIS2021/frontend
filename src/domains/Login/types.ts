export interface ILoginData {
    email: string;
    password: string;
}

export interface IChangePasswordData {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}
