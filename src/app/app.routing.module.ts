import { AuthGuard } from './authguard.service'
import { Routes } from '@angular/router'
import { CreateadminComponent } from './admin/createadmin/createadmin.component'
import { AdminemployeesComponent } from './admin/adminemployees/adminemployees.component'
import { LoginComponent } from './login/login.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

export const routes: Routes = [
    {
        path: 'client/:client-code',
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
    },
    { path: '**', component: PagenotfoundComponent }
];
