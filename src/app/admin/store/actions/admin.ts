import { Action } from '@ngrx/store'
import { Employee } from '../../model/Employee'
import { Dropdown } from '../../model/Adminstrator'

export const GET_EMPLOYEES = "GET_EMPLOYEES"
export const GET_EMPLOYEES_DONE = "GET_EMPLOYEES_DONE"
export const GET_EMPLOYEES_FAILED = 'GET_EMPLOYEES_FAILED'

export const ADD_ADMIN = "ADD_ADMIN"
export const ADD_ADMIN_DONE = "ADD_ADMIN_DONE"
export const ADD_ADMIN_FAILED = 'ADD_ADMIN_FAILED'

export const GET_SUBSCRIPTION = "GET_SUBSCRIPTION"
export const GET_SUBSCRIPTION_DONE = "GET_SUBSCRIPTION_DONE"
export const GET_SUBSCRIPTION_FAILED = 'GET_SUBSCRIPTION_FAILED'

export class GetSubscriptionAction implements Action {
  readonly type = GET_SUBSCRIPTION
  constructor() { }
}
export class GetSubscriptionDoneAction implements Action {
  readonly type = GET_SUBSCRIPTION_DONE
  constructor(public subcriptions: any,public roles: any,public positions: any) { }
}
export class GetSubscriptionFailedAction implements Action {
  readonly type = GET_SUBSCRIPTION_FAILED
  constructor(public payload: any) { }
}

export class GetEmployeesAction implements Action {
  readonly type = GET_EMPLOYEES
  constructor() { }
}
export class GetEmployeesDoneAction implements Action {
  readonly type = GET_EMPLOYEES_DONE
  constructor(public payload: Employee[]) { }
}
export class GetEmployeeFailedAction implements Action {
  readonly type = GET_EMPLOYEES_FAILED
  constructor(public payload: any) { }
}

export class SaveAdmminAction implements Action {
  readonly type = ADD_ADMIN
  constructor(public payload: any) { }
}
export class SaveAdminDoneAction implements Action {
  readonly type = ADD_ADMIN_DONE
  constructor(public payload: any) { }
}
export class SaveAdminFailedAction implements Action {
  readonly type = ADD_ADMIN_FAILED
  constructor(public payload: any) { }
}
export type ALL_REDUCER_ACTIONS
  = GetEmployeesAction
  | GetEmployeesDoneAction
  | GetEmployeeFailedAction
  | SaveAdmminAction
  | SaveAdminDoneAction
  | SaveAdminFailedAction
  | GetSubscriptionAction
  | GetSubscriptionDoneAction
  | GetSubscriptionFailedAction
