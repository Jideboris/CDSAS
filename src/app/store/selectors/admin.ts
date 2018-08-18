import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AdminState } from '../reducers/admin'

export const getAdminState = createFeatureSelector<AdminState>('adminState')

export const getLoginInfo = createSelector(
    getAdminState,
    (state: AdminState) => state.logininfo
);
export const getClientRegistration = createSelector(
    getAdminState,
    (state: AdminState) => state.clientreg
);
export const getSubscriptions = createSelector(
    getAdminState,
    (state: AdminState) => state.subscriptions
);
export const getRoles = createSelector(
    getAdminState,
    (state: AdminState) => state.roles
);
export const getPositions = createSelector(
    getAdminState,
    (state: AdminState) => state.positions
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