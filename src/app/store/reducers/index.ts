
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store'
import { environment } from '../../../environments/environment'
import { reducer, AppAdminState } from './admin'
import { clientreducer } from './client';

export const reducers: ActionReducerMap<AppAdminState> = {
    adminState: reducer,
    clientState: clientreducer

}
export function logger(reducer: ActionReducer<AppAdminState>): ActionReducer<AppAdminState> {
    return function (state: AppAdminState, action: any): AppAdminState {
        return reducer(state, action)
    }
}
export const metaReducers: MetaReducer<AppAdminState>[] = !environment.production
    ? [logger]
    : [];

