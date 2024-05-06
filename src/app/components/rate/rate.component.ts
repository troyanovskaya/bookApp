import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements DoCheck, AfterViewChecked{
  partlyCalculate(){
    let per = this.rate %1;
  }
  ngAfterViewChecked(): void {
    let s = this.stars.toArray()
    if(!this.set && this.rate && s.length==5){
      let per = (this.rate %1)*30;
      if(this.rate<4 && this.rate>3){
        s[3].nativeElement.style.width = `${per}px`;
        s[3].nativeElement.style.backgroundColor = `yellow`;
      } else if(this.rate<5 && this.rate>4){
        s[4].nativeElement.style.width = `${per}px`;
        s[4].nativeElement.style.backgroundColor = `yellow`;
      } else if(this.rate<3 && this.rate>2){
        s[2].nativeElement.style.width = `${per}px`;
        s[2].nativeElement.style.backgroundColor = `yellow`;
      } else if(this.rate<2 && this.rate>1){
        s[1].nativeElement.style.width = `${per}px`;
        s[1].nativeElement.style.backgroundColor = `yellow`;
      } else if(this.rate<1 && this.rate>0){
        s[0].nativeElement.style.width = `${per}px`;
        s[0].nativeElement.style.backgroundColor = `yellow`;
      }

    }
  }
  ngDoCheck(): void {
    //console.log(this.stars)

  }
  @Input() rate: number = 0;
  set:boolean = false;
  @ViewChildren('fill') stars!: QueryList<any>;
  // @ViewChild('.filling-1') star1!: ElementRef;
  // @ViewChild('.filling-2') star2!: ElementRef;
  // @ViewChild('.filling-3') star3!: ElementRef;
  // @ViewChild('.filling-4') star4!: ElementRef;
  // @ViewChild('.filling-5') star5!: ElementRef;

}


