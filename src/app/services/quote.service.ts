import { Injectable } from '@angular/core';
import { Quote } from '../schemas/quote';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  postQuote(comment: any){
    return this.http.post<Quote>('http://localhost:3000/quotes', comment);
  }
  getQuoteByBookId(id: String){
    return this.http.get<Quote[]>(`http://localhost:3000/quotes/books/${id}`);
  }
  constructor(public http: HttpClient) { }
}
