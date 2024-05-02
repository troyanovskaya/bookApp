import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/schemas/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  id: String = '';
  book?: Book;
  comments? = [{'_id': '1c', 'comment_book': '1b', 'comment_user': '1u', 'comment_user_avatar': 'assets/avatars/lotus.png', 'comment_user_login': 'user1', 'comment_text': 'drtyuvczxcvjc zxyhwedsrghcx st jhtg',
  'comment_date': '16/11/2023'}]
  constructor( public booksService: BooksService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params['id']);
    this.booksService.getBook(this.id).subscribe( book => this.book = book);
  }
  states:string[] = ["Unread", "Read", "Saved", "Dropped"]
  visible:boolean=false;
  currentState:string = this.states[0];
  dropdown(){
    this.visible=!this.visible;
  }
  changeListItem(index:number){
    this.currentState = this.states[index];
    this.dropdown();
  }

}
