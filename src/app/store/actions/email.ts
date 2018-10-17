import { Action } from '@ngrx/store'

export const SEND_CLIENT_EMAIL = "SEND_CLIENT_EMAIL"
export const SEND_CLIENT_EMAIL_DONE = "SEND_CLIENT_EMAIL_DONE"
export const SEND_CLIENT_EMAIL_FAILED = 'SEND_CLIENT_EMAIL_FAILED'

export const MESSAGE_CLIENT_EMPLOYEE = "MESSAGE_CLIENT_EMPLOYEE"
export const MESSAGE_CLIENT_EMPLOYEE_DONE = "MESSAGE_CLIENT_EMPLOYEE_DONE"
export const MESSAGE_CLIENT_EMPLOYEE_FAILED = 'MESSAGE_CLIENT_EMPLOYEE_FAILED'

export class SendClientEmail implements Action {
    readonly type = SEND_CLIENT_EMAIL
    constructor(public payload: any) { }
}
export class SendClientEmailDone implements Action {
    readonly type = SEND_CLIENT_EMAIL_DONE
    constructor(public payload: any) { }
}
export class SendClientEmailFailed implements Action {
    readonly type = SEND_CLIENT_EMAIL_FAILED
    constructor(public payload: any) { }
}
export class MessageClientEmployees implements Action {
    readonly type = MESSAGE_CLIENT_EMPLOYEE
    constructor(public payload: any) { }
  }
  export class MessageClientEmployeesDone implements Action {
    readonly type = MESSAGE_CLIENT_EMPLOYEE_DONE
    constructor(public payload: string) { }
  }
  export class MessageClientEmployeesFailed implements Action {
    readonly type = MESSAGE_CLIENT_EMPLOYEE_FAILED
    constructor(public payload: any) { }
  }
  
export type ALL_REDUCER_ACTIONS
    = SendClientEmail
    | SendClientEmailDone
    | SendClientEmailFailed
    | MessageClientEmployees
    | MessageClientEmployeesDone
    | MessageClientEmployeesFailed
