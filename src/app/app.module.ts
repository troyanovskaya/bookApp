import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookHeaderComponent } from './components/book-header/book-header.component';
import { LogoComponent } from './components/book-header/logo/logo.component';
import { NavigationComponent } from './components/book-header/navigation/navigation.component';
import { SearchComponent } from './components/book-header/search/search.component';
import { ProfileComponent } from './components/book-header/profile/profile.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookHeaderComponent,
    LogoComponent,
    NavigationComponent,
    SearchComponent,
    ProfileComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
