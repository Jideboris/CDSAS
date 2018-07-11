import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../app/AppRoutingModule'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AdminModule } from './admin/admin.module'
import { AuthGuard } from './authguard.service';
import { BoardComponent } from './board/board.component';
import { AnswerComponent } from './answer/answer.component';
import { LoginComponent } from './login/login.component';
import { AnswerSingleComponent } from './answer-single/answer-single.component';
import { AnswerMultipleComponent } from './answer-multiple/answer-multiple.component';
import { AnswerWriteComponent } from './answer-write/answer-write.component'

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AnswerComponent,
    LoginComponent,
    AnswerSingleComponent,
    AnswerMultipleComponent,
    AnswerWriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
