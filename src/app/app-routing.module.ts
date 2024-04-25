import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'books/:id', component: BookPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
