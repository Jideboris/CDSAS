import { AuthGuard } from './authguard.service'
import { Routes } from '@angular/router'
import { CreateadminComponent } from './admin/createadmin/createadmin.component'
import { AdminemployeesComponent } from './admin/adminemployees/adminemployees.component'
import {LoginComponent} from './login/login.component'
export const routes: Routes = [
    {
        path: '',
        //canActivate: [AuthGuard],
        component: CreateadminComponent
    },
    {
        path: 'addemployees',
       // canActivate: [AuthGuard],
        component: AdminemployeesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
