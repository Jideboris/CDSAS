import * as fromActions from '../actions/email'
import { ClientState } from './admin';

export const initialState: ClientState = {
    employees: {},
    message: '',
    loading: false,
    emailstate: {}
}

export function clientreducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ClientState {
    switch (action.type) {
        case fromActions.MESSAGE_CLIENT_EMPLOYEE: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.MESSAGE_CLIENT_EMPLOYEE_DONE: {
            return {
                ...state,
                employees: action.payload, message: '', loading: false
            }
        }
        case fromActions.MESSAGE_CLIENT_EMPLOYEE_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        case fromActions.SEND_CLIENT_EMAIL: {
            return {
                ...state, loading: true
            }
        }
        case fromActions.SEND_CLIENT_EMAIL_DONE: {
            return {
                ...state,
                emailstate: action.payload, message: '', loading: false
            }
        }
        case fromActions.SEND_CLIENT_EMAIL_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

