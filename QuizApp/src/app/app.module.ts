import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultComponent } from './result/result.component';
import { QuizInterfaceComponent } from './quiz-interface/quiz-interface.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizAuthGuardService } from './quiz-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultComponent,
    QuizInterfaceComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
