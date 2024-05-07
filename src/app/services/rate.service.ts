import { Injectable } from '@angular/core';
import { Rate } from '../schemas/rate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  postRate(rate: any){
    return this.http.post<number>('http://localhost:3000/rates', rate);
  }
  getRateByBookId(id: String){
    return this.http.get<number>(`http://localhost:3000/rates/books/${id}`);
  }
  constructor(public http: HttpClient) { }
}
