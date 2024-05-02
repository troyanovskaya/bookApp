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

}
