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
import { SliderComponent } from './components/reusable/slider/slider.component';
import { FooterComponent } from './components/reusable/footer/footer.component';
import { BookComponent } from './components/reusable/book/book.component';
import { RateComponent } from './components/reusable/rate/rate.component';
import { SignInFormComponent } from './components/reusable/sign-in-form/sign-in-form.component';
import { RegistrationComponent } from './components/reusable/registration/registration.component';
import { FilterBarComponent } from './components/home-page/filter-bar/filter-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { UnderlineDirective } from './directives/underline.directive';
import { PointerDirective } from './directives/pointer.directive';
import { HeaderComponent } from './components/book-page/header/header.component';
import { CommentsComponent } from './components/book-page/comments/comments.component';
import { OpacityDDirective } from './directives/opacity-d.directive';
import { BtnReadComponent } from './components/reusable/btn-read/btn-read.component';
import { DropdownComponent } from './components/book-header/profile/dropdown/dropdown.component';
import { BookReviewPageComponent } from './components/book-review-page/book-review-page.component';
import { ReviewComponent } from './components/book-review-page/review/review.component';
import { BookQuotePageComponent } from './components/book-quote-page/book-quote-page.component';
import { QuoteComponent } from './components/book-quote-page/quote/quote.component';
import { BtnAddComponent } from './components/reusable/btn-add/btn-add.component';
import { BookListsPageComponent } from './components/book-lists-page/book-lists-page.component';
import { ListHeaderComponent } from './components/book-lists-page/list-header/list-header.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RecPageComponent } from './components/rec-page/rec-page.component';
import { NoUserRecsComponent } from './components/book-header/no-user-recs/no-user-recs.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
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
    BtnAddComponent,
    BookListsPageComponent,
    ListHeaderComponent,
    ProfilePageComponent,
    RecPageComponent,
    NoUserRecsComponent,
    AuthorPageComponent
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
