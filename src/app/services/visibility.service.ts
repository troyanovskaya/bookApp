import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  showSignForm:boolean = false;
  showPasswordResetForm:boolean = false;
  showRegistrationForm:boolean = false;
  showNewPasswordForm:boolean = false;
  constructor() { }
}
