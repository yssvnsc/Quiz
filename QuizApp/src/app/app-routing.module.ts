import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizInterfaceComponent } from './quiz-interface/quiz-interface.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResultComponent } from './result/result.component';
import { QuizAuthGuardService } from './quiz-auth-guard.service';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'quiz', component: QuizInterfaceComponent },
  { path: 'result', component: ResultComponent,canActivate:[QuizAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
