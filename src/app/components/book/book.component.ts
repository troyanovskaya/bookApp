import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input()
    book?:{name:string, year: number, author:string, description:string[], img:string, state:string, saved:boolean}
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
