import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { RecService } from 'src/app/services/rec.service';

@Component({
  selector: 'app-rec-panel',
  templateUrl: './rec-panel.component.html',
  styleUrls: ['./rec-panel.component.scss']
})
export class RecPanelComponent implements AfterViewInit{
  @ViewChildren('form') inputs?: QueryList<ElementRef>;
  @Output() onKChange:EventEmitter<number[]> = new EventEmitter<number[]>;
  openForm:boolean = false;
  k:number[] = [];
  constructor(public recService: RecService){}
  ngAfterViewInit(): void {
    let k = this.recService.getK();
    this.setInput(k);
  }
  setInput(k: number[]){
    this.inputs?.forEach( (el, index) =>{
      el.nativeElement.value = k[index]*10;
      this.k.push(k[index]*10);
    })
  }
  getInput(){
    this.k = [];
    this.inputs?.forEach( (el, index) =>{
      this.k.push(parseInt(el.nativeElement.value));
    })
  }
  sumK(){
    let sum = this.k.reduce((prev, cur) =>{
      return prev + cur
    }, 0)
    return sum;
  }
  normolizeK(sum:number){
    this.k.forEach( (el, index, array) => {
      array[index] = Math.round( (el/sum*100))/100;});
    console.log(this.k);
  }
  validateInput(input: HTMLInputElement){
    let value = parseInt(input.value);
    if (value < 0) {
      input.value = '0';
    } else if (value > 5) {
      input.value = '5';
    }
    this.getInput();
    let sum = this.sumK();
    this.normolizeK(sum);
  }
  submit(){
    this.onKChange.emit(this.k);
    this.openForm = false;
  }
}
