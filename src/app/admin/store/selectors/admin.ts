import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AdminState } from '../reducers/admin'

export const getAdminState = createFeatureSelector<AdminState>('adminState')
export const saveAdmin = createSelector(
    getAdminState,
    (state: AdminState) => state.admin
);
export const getEmployees = createSelector(
    getAdminState,
    (state: AdminState) => state.employees
);

export const getMessage = createSelector(
    getAdminState,
    (state: AdminState) => state.message
);

export const getLoading = createSelector(
    getAdminState,
    (state: AdminState) => state.loading
);