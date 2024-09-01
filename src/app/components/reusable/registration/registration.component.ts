import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  @ViewChild('registrationForm') form?: NgForm;
  constructor(public visibilityService: VisibilityService, public logInService: LogInService){}
  onRegistrationSend(){
    let email = this.form?.value.email.trim();
    let login = this.form?.value.login.trim();
    let password1 = this.form?.value.password1.trim();
    let password2 = this.form?.value.password2.trim();
    if(password1 !== password2){
      alert('Passwords are not the same!');
    } else if ( email && login && password1 && password2){
      this.logInService.registerNewUser(password1, login, email).subscribe(
        data =>{
          if(data.token && data.user){
            this.logInService.token = data.token;
            localStorage.setItem('token', data.token);
            this.logInService.user = data.user;
            this.visibilityService.showRegistrationForm = false;
          }
        }
      );
    } else{
      alert('Please, fill all the fields!');
    }
  }

}
