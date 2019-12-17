import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {
  @HostBinding('style.color')myColor: string;
  @HostBinding('style.background-color')myBackground: string;
  colors: any;
  constructor() {
    this.myColor = 'red';
    this.myBackground = 'blue';
    this.colors = ['red', 'blue', 'green', 'yellow', 'white', 'black'];


  }
  @HostListener('keydown') onChange(event:Event) {
    this.myColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.myBackground = this.colors[Math.floor(Math.random() * this.colors.length )];
  }

}
