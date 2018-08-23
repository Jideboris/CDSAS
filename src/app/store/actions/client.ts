import { Action } from '@ngrx/store'

export const ADD_CLIENT_EMPLOYEE = "ADD_CLIENT_EMPLOYEE"
export const ADD_CLIENT_EMPLOYEE_DONE = "ADD_CLIENT_EMPLOYEE_DONE"
export const ADD_CLIENT_EMPLOYEE_FAILED = 'ADD_CLIENT_EMPLOYEE_FAILED'

export class SaveClientEmployees implements Action {
  readonly type = ADD_CLIENT_EMPLOYEE
  constructor(public payload: any) { }
}
export class SaveClientEmployeesDone implements Action {
  readonly type = ADD_CLIENT_EMPLOYEE_DONE
  constructor(public payload: any) { }
}
export class SaveClientEmployeesFailed implements Action {
  readonly type = ADD_CLIENT_EMPLOYEE_FAILED
  constructor(public payload: any) { }
}

export type ALL_REDUCER_ACTIONS
  = SaveClientEmployees
  | SaveClientEmployeesDone
  | SaveClientEmployeesFailed
