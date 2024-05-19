import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../schemas/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(public http: HttpClient){}
  getAuthorByName(name: string){
    return this.http.get<Author[]>(`http://localhost:3000/authors/${name}`);
  }
}
