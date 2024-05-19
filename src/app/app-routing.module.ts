import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { BookReviewPageComponent } from './components/book-review-page/book-review-page.component';
import { BookQuotePageComponent } from './components/book-quote-page/book-quote-page.component';
import { BookListsPageComponent } from './components/book-lists-page/book-lists-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RecPageComponent } from './components/rec-page/rec-page.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'books/:id', component: BookPageComponent },
  { path: 'books/:id/reviews', component: BookReviewPageComponent },
  { path: 'books/:id/quotes', component: BookQuotePageComponent },
  { path: 'bookList', component: BookListsPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'bookRecs', component: RecPageComponent },
  { path: 'authors/:name', component: AuthorPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
