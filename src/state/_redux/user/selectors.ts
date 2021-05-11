import { UserModule } from '@state/_redux/user/module';

interface IProps {
    user: UserModule;
}

export const isAuthorized = ({ user }: IProps): boolean | null =>
    user.authorized;
