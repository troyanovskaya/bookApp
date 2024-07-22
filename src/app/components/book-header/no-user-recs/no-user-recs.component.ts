import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-no-user-recs',
  templateUrl: './no-user-recs.component.html',
  styleUrls: ['./no-user-recs.component.scss']
})
export class NoUserRecsComponent {
  public screenWidth: any;
  ngOnInit() {
      this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }
}
