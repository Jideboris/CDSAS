
import { Routes } from '@angular/router'
import { CreateadminComponent } from './createadmin/createadmin.component'
import { AdminemployeesComponent } from './adminemployees/adminemployees.component'
export const routes: Routes = [
    { path: '', component: CreateadminComponent },
    { path: 'addemployees', component: AdminemployeesComponent }
];
