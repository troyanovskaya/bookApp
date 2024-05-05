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
import { FilterBarComponent } from './components/home-page/filter-bar/filter-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { UnderlineDirective } from './directives/underline.directive';
import { PointerDirective } from './directives/pointer.directive';
import { HeaderComponent } from './components/book-page/header/header.component';
import { CommentsComponent } from './components/book-page/comments/comments.component';
import { OpacityDDirective } from './directives/opacity-d.directive';
import { BtnReadComponent } from './components/btn-read/btn-read.component';
import { DropdownComponent } from './components/book-header/profile/dropdown/dropdown.component';
import { BookReviewPageComponent } from './components/book-review-page/book-review-page.component';
import { ReviewComponent } from './components/book-review-page/review/review.component';
import { BookQuotePageComponent } from './components/book-quote-page/book-quote-page.component';
import { QuoteComponent } from './components/book-quote-page/quote/quote.component';
import { BtnAddComponent } from './components/btn-add/btn-add.component';
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
    FilterBarComponent,
    HomePageComponent,
    BookPageComponent,
    UnderlineDirective,
    PointerDirective,
    HeaderComponent,
    CommentsComponent,
    OpacityDDirective,
    BtnReadComponent,
    DropdownComponent,
    BookReviewPageComponent,
    ReviewComponent,
    BookQuotePageComponent,
    QuoteComponent,
    BtnAddComponent
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
