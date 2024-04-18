import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookHeaderComponent } from './components/book-header/book-header.component';
import { LogoComponent } from './components/book-header/logo/logo.component';
import { NavigationComponent } from './components/book-header/navigation/navigation.component';
import { SearchComponent } from './components/book-header/search/search.component';
import { ProfileComponent } from './components/book-header/profile/profile.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookComponent } from './components/book/book.component';
import { RateComponent } from './components/rate/rate.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BookHeaderComponent,
    LogoComponent,
    NavigationComponent,
    SearchComponent,
    ProfileComponent,
    SliderComponent,
    FooterComponent,
    BookComponent,
    RateComponent,
    SignInFormComponent,
    RegistrationComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
