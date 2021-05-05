import { UserModule } from '@state/_redux/user/module';

export const isAuthorized = (state: UserModule): boolean => state.authorized;
