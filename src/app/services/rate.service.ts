import { Injectable } from '@angular/core';
import { Rate } from '../schemas/rate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  postRate(rate: any){
    return this.http.post<number>('https://bookappback.onrender.com/rates', rate);
  }
  getRateByBookId(id: String){
    return this.http.get<number>(`https://bookappback.onrender.com/rates/books/${id}`);
  }
  getRateByUserId(id: String){
    return this.http.get<Rate[]>(`https://bookappback.onrender.com/rates/users/${id}`);
  }
  constructor(public http: HttpClient) { }
}
