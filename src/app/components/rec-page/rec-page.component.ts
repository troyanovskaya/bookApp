import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { RecService } from 'src/app/services/rec.service';

@Component({
  selector: 'app-rec-page',
  templateUrl: './rec-page.component.html',
  styleUrls: ['./rec-page.component.scss']
})
export class RecPageComponent implements OnInit{
  constructor(public recService: RecService, public logInService: LogInService){}
  bookShown: number = 10;
  val: any;
  on(){
    console.log(this.logInService.user?.user_books_recommendations?.length)
  }
  ngOnInit(): void {
    // if(this.logInService.user && this.recService.scoredBooks.length==0){
    //   this.val = this.recService.getBookRecs(this.logInService.user);
    if (!this.logInService.user){
      console.log('111')
      this.recService.getBookRecs()
    } else if(this.logInService.user.user_books_recommendations.length < 10){
      console.log('222')
      this.recService.getBookRecs(this.logInService.user);
    }
  }
  showMoreBooks(){
    console.log(this.bookShown)
    this.bookShown = this.bookShown + 10;
  }
}
