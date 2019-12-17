import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.scss']
})
export class MiniWordComponent implements OnInit {
  myBackgroundColor: string;
  myFontSize: any;
 
  constructor() { }

  ngOnInit() {
    this.myBackgroundColor = "green";
    this.myFontSize = '30px';
    
  
  }

}
