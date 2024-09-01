import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  @ViewChild('resetForm') form?: NgForm;

  onResetClick(){
    console.log(this.form?.value['email']);
    this.logInService. resetPassword(this.form?.value['email']).subscribe( data =>{
      if(data.result){
        this.visibilityService.showPasswordResetForm=false
      } else{
        alert('Wrong email!')
      }
    })
  }
  constructor(public visibilityService: VisibilityService, public logInService: LogInService,
    private router: Router){}
}
