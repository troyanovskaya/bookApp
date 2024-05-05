import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { BookReviewPageComponent } from './components/book-review-page/book-review-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'books/:id', component: BookPageComponent },
  { path: 'books/:id/reviews', component: BookReviewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
