import { Action } from '@ngrx/store'

export const SEND_CLIENT_EMAIL = "SEND_CLIENT_EMAIL"
export const SEND_CLIENT_EMAIL_DONE = "SEND_CLIENT_EMAIL_DONE"
export const SEND_CLIENT_EMAIL_FAILED = 'SEND_CLIENT_EMAIL_FAILED'

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

export type ALL_REDUCER_ACTIONS
    = SendClientEmail
    | SendClientEmailDone
    | SendClientEmailFailed
