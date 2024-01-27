import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookHeaderComponent } from './book-header/book-header.component';
import { LogoComponent } from './book-header/logo/logo.component';
import { NavigationComponent } from './book-header/navigation/navigation.component';
import { SearchComponent } from './book-header/search/search.component';
import { ProfileComponent } from './book-header/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BookHeaderComponent,
    LogoComponent,
    NavigationComponent,
    SearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
