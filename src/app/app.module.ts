import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './AppRoutingModule'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AdminModule } from './admin/admin.module'
import { AuthGuard } from './authguard.service'
import { BoardComponent } from './board/board.component'
import { LoginComponent } from './login/log-in/login.component'
import { AnswerSingleComponent } from './answer-single/answer-single.component'
import { AnswerMultipleComponent } from './answer-multiple/answer-multiple.component'
import { AnswerWriteComponent } from './answer-write/answer-write.component';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { ClientsComponent } from './clients/clients.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CyberIssuesComponent } from './cyber-issues/cyber-issues.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component'

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    AnswerSingleComponent,
    AnswerMultipleComponent,
    AnswerWriteComponent,
    ClientRegComponent,
    ClientsComponent,
    PagenotfoundComponent,
    CyberIssuesComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutusComponent
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
