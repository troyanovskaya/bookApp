import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../schemas/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  patchUser(update: any, id: String){
    return this.http.patch<User>(`http://localhost:3000/users/${id}`, update);
  }
  constructor(public http: HttpClient) { }
}
