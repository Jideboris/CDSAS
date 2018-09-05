import * as fromActions from '../actions/admin'
import { Dropdown } from '../../model/Adminstrator';

export interface AppAdminState {
    adminState: AdminState,
    clientState: ClientState
};

export interface AdminState {
    subscriptions: Dropdown[]
    roles: Dropdown[]
    positions: Dropdown[]
    employees: any
    logininfo: any
    admin: string
    message: string
    loading: boolean
    clientreg: string
};

export interface ClientState {
    employees: any
    message: string
    loading: boolean
    emailstate: any
};
export const initialState: AdminState = {
    subscriptions: [],
    roles: [],
    positions: [],
    employees: {},
    logininfo: {},
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
                subscriptions: action.subcriptions, roles: action.roles, positions: action.positions, loading: false
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
        case fromActions.ADD_CLIENT_REGISTRATION_FORM: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.ADD_CLIENT_REGISTRATION_FORM_DONE: {
            return {
                ...state,
                admin: action.payload, message: '', loading: false
            }
        }
        case fromActions.ADD_CLIENT_REGISTRATION_FORM_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        case fromActions.GET_LOGIN_INFO: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.GET_LOGIN_INFO_DONE: {
            return {
                ...state,
                logininfo: action.payload, message: '', loading: false
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

