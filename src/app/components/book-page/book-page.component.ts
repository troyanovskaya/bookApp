import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';
import { LogInService } from 'src/app/services/log-in.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  id: String = '';
  book?: Book;
  comm: String = '';
  comments? = [{'_id': '1c', 'comment_book': '1b', 'comment_user': '1u', 'comment_user_avatar': 'assets/avatars/lotus.png', 'comment_user_login': 'user1', 'comment_text': 'drtyuvczxcvjc zxyhwedsrghcx st jhtg',
  'comment_date': '16/11/2023'}]
  constructor( public booksService: BooksService,
     private route: ActivatedRoute, public logInService: LogInService,
     public userService: UserService){}

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params['id']);
    this.booksService.getBook(this.id).subscribe( book => this.book = book);
  }
  postComment(){
    let book = this.book;
    let user = this.logInService.user;
    let date = new Date().toLocaleDateString('en-GB');
    let arrayOfRows = this.comm.split("\n");
    if(user && book){
      let book_comment = {user_id: user._id, user_login: user.user_login, user_img: user.user_img, comment: arrayOfRows, date: date.toString()};

      let user_comment = {book_id: book._id,  book_name: book.book_name, book_authors: book.book_authors, book_img: book.book_img, comment: arrayOfRows, date: date.toString()};
      console.log(user_comment)
      user.user_comments.push(user_comment);
      this.userService.patchUser(user, user._id).subscribe( data => {
        console.log(data);
      })
      // book.book_comments.push(book_comment);
      // this.book = book;
      // this.booksService.patchBookArray(book_comment, 'book_comments', book._id).subscribe( data =>
      //   console.log(data)
      // );
    }

  }

}
