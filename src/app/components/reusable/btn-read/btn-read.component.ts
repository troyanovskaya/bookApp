import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';
import { RecService } from 'src/app/services/rec.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-btn-read',
  templateUrl: './btn-read.component.html',
  styleUrls: ['./btn-read.component.scss']
})
export class BtnReadComponent implements DoCheck{
  @Input() book?:Book;
  states:string[] = ["Unread", "Read", "Saved", "Dropped", "Favourite"];
  visible:boolean=false;
  currentState?:string;
  dropdown(){
    this.visible=!this.visible;
  }
  changeListItem(index:number){
    this.currentState = this.states[index];
    let update;
    console.log('changeListItem');
    if(this.book && this.book._id && this.logInService.user){
      let bookId = this.book._id;
      let user = this.logInService.user;
      user.user_books_read = user.user_books_read.filter( el => el!= bookId);
      user.user_books_saved = user.user_books_saved.filter( el => el!= bookId);
      user.user_books_dropped = user.user_books_dropped.filter( el => el!= bookId);
      user.user_books_favourite = user.user_books_favourite.filter( el => el!= bookId);
      switch (this.currentState){
        case "Read":
          user.user_books_read.push(this.book._id);
          break;
        case "Saved":
          user.user_books_saved.push(this.book._id);
          break;
        case "Dropped":
          user.user_books_dropped.push(this.book._id);
          break;
        case "Favourite":
          user.user_books_favourite.push(this.book._id);
          break;

      }
      // user.user_books_read = [];
      // user.user_books_saved = [];
      // user.user_books_dropped = [];
      // user.user_books_favourite = [];
      // user.user_books_recommendations = [];
      update = user;
      this.logInService.user = user;
      localStorage.setItem('userObject', JSON.stringify(user));
      this.recsService.getBookRecs(user);
    }
    this.dropdown();
  }
  constructor(public logInService: LogInService, public booksService: BooksService,
    public userService: UserService, public recsService: RecService){}
  ngDoCheck(){
    let user = this.logInService.user;
    let bookId = this.book?._id;
    if (user && this.book?._id){
      let read = user.user_books_read.filter( el => el == bookId);
      let saved = user.user_books_saved.filter( el => el == bookId);
      let dropped = user.user_books_dropped.filter( el => el == bookId);
      let favourite = user.user_books_favourite.filter( el => el == bookId);
      if(read.length!=0){
        this.currentState = this.states[1];
      } else if(saved.length!=0){
        this.currentState = this.states[2];
      } else if(dropped.length!=0){
        this.currentState = this.states[3];
      } else if(favourite.length!=0){
        this.currentState = this.states[4];
      } else{
        this.currentState = this.states[0];
      }
    }
  }
}
