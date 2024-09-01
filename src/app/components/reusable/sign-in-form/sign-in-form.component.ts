import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  @ViewChild('signForm') form?: NgForm;
  openRegistrationWindow(){
    this.visibilityService.showRegistrationForm=true;
    this.visibilityService.showSignForm=false;
  }
  openResetWindow(){
    this.visibilityService.showPasswordResetForm = true;
    this.visibilityService.showSignForm=false;
  }
  onSignInClick(){
    console.log(this.form?.value['email']);
    this.logInService.getUserByEmailPassword(this.form?.value['password'], this.form?.value['email']).subscribe( data =>{
      if(data.body?.token && data.body?.user){
        this.logInService.token = data.body.token;
        this.logInService.user = data.body.user;
        localStorage.setItem('token', this.logInService.token);
        this.router.navigate(['/home'])
        this.visibilityService.showSignForm=false;
      } else{
        alert('No such user found');
      }

    })
  }
  constructor(public visibilityService: VisibilityService, public logInService: LogInService,
    private router: Router){}

}
