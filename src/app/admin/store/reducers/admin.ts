import * as fromActions from '../actions/admin'
import { Dropdown } from '../../model/Adminstrator';

export interface AppAdminState {
    adminState: AdminState
};

export interface AdminState {
    subscriptions: Dropdown[]
    employees: any
    admin: string
    message: string
    loading: boolean
};

export const initialState: AdminState = {
    subscriptions: [],
    employees: {},
    admin: '',
    message: '',
    loading: false
}
export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): AdminState {
    switch (action.type) {
        case fromActions.GET_SUBSCRIPTION: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.GET_SUBSCRIPTION_DONE: {
            return {
                ...state,
                subscriptions: action.payload, message: '', loading: false
            }
        }
        case fromActions.GET_SUBSCRIPTION_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        case fromActions.GET_EMPLOYEES: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.GET_EMPLOYEES_DONE: {
            return {
                ...state,
                employees: action.payload, message: '', loading: false
            }
        }
        case fromActions.GET_EMPLOYEES_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        case fromActions.ADD_ADMIN: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.ADD_ADMIN_DONE: {
            return {
                ...state,
                admin: action.payload, message: '', loading: false
            }
        }
        case fromActions.ADD_ADMIN_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

