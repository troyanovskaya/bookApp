import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Book } from 'src/app/schemas/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input()
    book?:Book
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
