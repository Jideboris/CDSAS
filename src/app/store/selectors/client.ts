import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ClientState } from '../reducers/admin';

export const getClientState = createFeatureSelector<ClientState>('clientState')

export const getClientEmployees = createSelector(
    getClientState,
    (state: ClientState) => state.employees
);
