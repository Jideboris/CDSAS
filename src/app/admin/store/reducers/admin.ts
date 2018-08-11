import * as fromActions from '../actions/admin'
import { Dropdown } from '../../model/Adminstrator';

export interface AppAdminState {
    adminState: AdminState
};

export interface AdminState {
    subscriptions: Dropdown[]
    roles: Dropdown[]
    postions: Dropdown[]
    employees: any
    admin: string
    message: string
    loading: boolean
    clientreg: string
};

export const initialState: AdminState = {
    subscriptions: [],
    roles: [],
    postions: [],
    employees: {},
    admin: '',
    message: '',
    loading: false,
    clientreg: ''
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
                subscriptions: action.subcriptions, roles: action.roles, postions: action.positions, loading: false
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
        case fromActions.ADD_CLIENT_REGISTRATION: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.ADD_CLIENT_REGISTRATION_DONE: {
            return {
                ...state,
                admin: action.payload, message: '', loading: false
            }
        }
        case fromActions.ADD_CLIENT_REGISTRATION_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        case fromActions.GET_CLIENTREG: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.GET_CLIENTREG_DONE: {
            return {
                ...state,
                clientreg: action.payload, message: '', loading: false
            }
        }
        case fromActions.GET_CLIENTREG_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

