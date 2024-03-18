import { Component } from '@angular/core';
import { VisibilityService } from './services/visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookApp';
  books:{name:string, year: number, author:string, description:string[], img:string, state:string, saved:boolean}[]=
  [
    {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false},
     {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false},
     {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false},
     {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false},
     {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false},
     {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false},
     {name: "Jane Eyre", year:2011, author:"Charlotte Bronte", description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     img:"assets/covers/book1.jpg", state:"Unread", saved: false}
  ]
  constructor(public visibilityService: VisibilityService){}
}
