import { Action } from '@ngrx/store'

export const ADD_CLIENT_EMPLOYEE = "ADD_CLIENT_EMPLOYEE"
export const ADD_CLIENT_EMPLOYEE_DONE = "ADD_CLIENT_EMPLOYEE_DONE"
export const ADD_CLIENT_EMPLOYEE_FAILED = 'ADD_CLIENT_EMPLOYEE_FAILED'

export const GET_CLIENT_EMPLOYEE = "GET_CLIENT_EMPLOYEE"
export const GET_CLIENT_EMPLOYEE_DONE = "GET_CLIENT_EMPLOYEE_DONE"
export const GET_CLIENT_EMPLOYEE_FAILED = 'GET_CLIENT_EMPLOYEE_FAILED'

export class SaveClientEmployees implements Action {
  readonly type = ADD_CLIENT_EMPLOYEE
  constructor(public payload: any) { }
}
export class SaveClientEmployeesDone implements Action {
  readonly type = ADD_CLIENT_EMPLOYEE_DONE
  constructor(public payload: string) { }
}
export class SaveClientEmployeesFailed implements Action {
  readonly type = ADD_CLIENT_EMPLOYEE_FAILED
  constructor(public payload: any) { }
}
export class GetClientEmployees implements Action {
  readonly type = GET_CLIENT_EMPLOYEE
  constructor(public regcode: string) { }
}
export class GetClientEmployeesDone implements Action {
  readonly type = GET_CLIENT_EMPLOYEE_DONE
  constructor(public payload: any) { }
}
export class GetClientEmployeesFailed implements Action {
  readonly type = GET_CLIENT_EMPLOYEE_FAILED
  constructor(public payload: any) { }
}
export type ALL_REDUCER_ACTIONS
  = SaveClientEmployees
  | SaveClientEmployeesDone
  | SaveClientEmployeesFailed
  | GetClientEmployees
  | GetClientEmployeesDone
  | GetClientEmployeesFailed
