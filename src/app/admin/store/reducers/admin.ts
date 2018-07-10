import * as fromActions from '../actions/admin'

export interface AppAdminState {
    adminState: AdminState
};

export interface AdminState {
    employees: any
    message: string
    loading: boolean
};

export const initialState: AdminState = {
    employees: {},
    message: '',
    loading: false
}
export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): AdminState {
    switch (action.type) {
        case fromActions.GET_EMPLOYEES: {
            return {
                ...state,
                employees: {}, message: '', loading: true
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
                ...state,
                employees: {}, message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

