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
  handleError(error: HttpErrorResponse) {
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
    alert(error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  getUserByEmailPassword(password:String, email: String){
    password = password.trim();
    email = email.trim();
    return this.http.get<User>
    (`http://localhost:3000/users/?password=${password}&email=${email}`,
     { observe: 'response' }).pipe(
      catchError(this.handleError)
    );;
  }
  logOut(){
    localStorage.removeItem('userObject');
    this.user = undefined;
  }
  checkLoggedInUser(){
    let retrievedObject = localStorage.getItem('userObject');
    if(retrievedObject){
      this.user = JSON.parse(retrievedObject);
    }

    console.log('retrievedObject: ', retrievedObject ? JSON.parse(retrievedObject) : 'none');
  }
  constructor(public http: HttpClient) { }
}
