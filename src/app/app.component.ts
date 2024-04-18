import { Component, OnInit } from '@angular/core';
import { VisibilityService } from './services/visibility.service';
import { FilterService } from './services/filter.service';
import { Book } from './schemas/book';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookApp';
  constructor(public visibilityService: VisibilityService, public filterService: FilterService,
    public booksService: BooksService){}
  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe( data =>{
      console.log(typeof data)
      for (let i = 0; i<data.length; i++){
        this.booksService.books.push(data[i])
      }
      })

  }
}
