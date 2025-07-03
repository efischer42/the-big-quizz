import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionsComponent } from './questions/questions/questions.component';
import { QuizzComponent } from './quizz/quizz/quizz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: PageNotFoundComponent },
];
