import { Injectable } from '@angular/core';
import { User } from '../schemas/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  user?: User;
  token?: string;
  handleError(error: HttpErrorResponse) {
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
    alert(error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  getUserByEmailPassword(password:String, email: String){
    password = password.trim();
    email = email.trim();
    return this.http.get<{user: User, token: string}>
    (`https://bookappback.onrender.com/users/?password=${password}&email=${email}`,
    //(`http://localhost:3000/users/?password=${password}&email=${email}`,
    { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }
  getUserByToken(){
    return this.http.get<User>
    (`https://bookappback.onrender.com/users/token`,
    //(`http://localhost:3000/users/token`,
    { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }
  logOut(){
    localStorage.removeItem('token');
    this.user = undefined;
  }
  checkLoggedInUser(){
    let token = localStorage.getItem('token');
    console.log('checkLoggedInUser token ', token);
    if(token){
      this.getUserByToken().subscribe( data =>{
        if(data.body){
          this.user = data.body
        }
      })
    } else{
      localStorage.removeItem('token')
    }

    console.log('retrievedObject: ', token);
  }
  registerNewUser(password: String, login: String, email: String){
    let user = {user_login: login, user_email: email, user_password: password};
    return this.http.post<{user: User, token: string}>
    ('https://bookappback.onrender.com/users', user)
    //('http://localhost:3000/users', user)
    .pipe(catchError(this.handleError));
  }
  constructor(public http: HttpClient) { }

}
