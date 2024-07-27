import { Component, HostListener, OnInit } from '@angular/core';
import { Comm } from 'src/app/schemas/comment';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';
import { CommentService } from 'src/app/services/comment.service';
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
  comments: Comm[] = [];
  editComment:Boolean = false;
  commToEdit?:Comm;
  showCommentField:boolean = false;
  showLoader = true;
  constructor( public booksService: BooksService,
     private route: ActivatedRoute, public logInService: LogInService,
     public userService: UserService, public commentService: CommentService){}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.booksService.getBook(this.id).subscribe( book => {
        this.showLoader = false;
        this.book = book;
      });
      this.commentService.getCommentByBookId(this.id).subscribe( comments => {
        this.comments = comments
      });
    });
    this.screenWidth = window.innerWidth;
  }
  changeVisibility(event: boolean){
    this.showCommentField = event;
  }
  reloadComms(){
    this.commentService.getCommentByBookId(this.id).subscribe( comments => {
      this.comments = comments
    });
  }
  editComm(event: Comm){
    console.log(event)
    this.commToEdit = event;
    this.editComment = true;
  }
  updateComm(text: string[]){
    if(this.commToEdit){
      this.commToEdit.comment_text = text;
      this.commentService.editComment(this.commToEdit).subscribe( data =>{
        console.log(data);
        this.reloadComms();
      })
    }

  }
  postComment(){
    let book = this.book;
    let user = this.logInService.user;
    let date = new Date().toLocaleDateString('en-GB');
    let arrayOfRows = this.comm.split("\n");
    if(user && book){
      let comm = {comment_book: book, comment_book_img: book.book_img, comment_book_name: book.book_name,
        comment_book_authors: book.book_authors, comment_user: user, comment_user_img: user.user_img,
        comment_user_login: user.user_login, comment_text: arrayOfRows, comment_date: date.toString()
      }
      this.commentService.postComment(comm).subscribe( data => {
        this.comm = '';
        this.comments.push(data)
      })
      this.showCommentField = false;
    }

  }
  close(){
    this.editComment = false;
  }
  public screenWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }

}
