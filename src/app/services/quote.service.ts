import { Injectable } from '@angular/core';
import { Quote } from '../schemas/quote';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  postQuote(quote: any){
    return this.http.post<Quote>('https://bookappback.onrender.com/quotes', quote);
  }
  getQuoteByBookId(id: String){
    return this.http.get<Quote[]>(`https://bookappback.onrender.com/quotes/books/${id}`);
  }
  deleteQuote(id: String){
    return this.http.delete<Quote>(`https://bookappback.onrender.com/quotes/${id}`);
  }
  constructor(public http: HttpClient) { }
}
