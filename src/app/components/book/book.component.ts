import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  books:{name:string, year: number, author:string, description:string[], img:string, state:string, saved:boolean}[]=[
    {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false}
  ]
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
