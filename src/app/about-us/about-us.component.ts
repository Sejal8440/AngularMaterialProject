import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  
  arrNumber: number[] = [];
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.arrNumber.push(i);
      console.log(i);
    }
  }
}


