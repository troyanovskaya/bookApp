import { Component, OnDestroy} from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy{
  visible:boolean = false;
  constructor(public visibilityService: VisibilityService, public logInService: LogInService){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  onProfileClick(){
    this.visible = !this.visible;
  }
  dropdownFalse(){
    this.visible = false;
  }

}
