import * as fromActions from '../actions/client'
import { ClientState } from './admin';

export const initialState: ClientState = {
    employees: {},
    message: '',
    loading: false,
}

export function clientreducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ClientState {
    switch (action.type) {
        case fromActions.ADD_CLIENT_EMPLOYEE: {
            console.log('here3')
            return {
                ...state, loading: true
            }
        }
        case fromActions.ADD_CLIENT_EMPLOYEE_DONE: {
            return {
                ...state,
                employees: action.payload, message: '', loading: false
            }
        }
        case fromActions.ADD_CLIENT_EMPLOYEE_FAILED: {
            return {
                ...state, message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

