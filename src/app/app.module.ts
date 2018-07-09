import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../app/AppRoutingModule'
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { AdminemployeesComponent } from './adminemployees/adminemployees.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateadminComponent,
    AdminemployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
