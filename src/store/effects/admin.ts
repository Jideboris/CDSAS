import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as fromActions from '../actions/admin'
import { AdminService } from '../../app/admin.service'

import { map, switchMap } from "rxjs/operators"

@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions,
        private adminService: AdminService) {
    }

    @Effect()
    retrieveemployees$: Observable<Action> = this.actions$
        .ofType<fromActions.GetEmployeesAction>(fromActions.GET_EMPLOYEES)
        .pipe(switchMap(() => this.adminService.getemployees()))
        .pipe(map(res => new fromActions.GetEmployeesDoneAction(res)))
      //  .pipe(catch((new fromActions.GetEmployeeFailedAction(error)))
      //  .map(action => action.payload)
       // .switchMap(() => this.adminService.getemployees()
            // .map(res => new fromActions.GetEmployeesDoneAction(res))
            //  .catch(error => of(new fromActions.GetEmployeeFailedAction(error)))
      //  );


}