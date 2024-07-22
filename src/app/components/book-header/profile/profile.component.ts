import { Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { VisibilityService } from 'src/app/services/visibility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy, OnInit{
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
  public screenWidth: any;
  ngOnInit() {
      this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }

}
