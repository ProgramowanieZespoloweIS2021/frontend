import { RootState } from '@@types/CommonTypes';
import { ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<
            typeof import('../../state/_redux/actions').default
        >;
    }
}

declare module 'react-redux' {
    export interface DefaultRootState extends RootState {}
}
