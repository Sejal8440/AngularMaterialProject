import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-demo',
  templateUrl: './create-demo.component.html',
  styleUrls: ['./create-demo.component.css']
})
export class CreateDemoComponent implements OnInit {
  
  createDemo:FormGroup;
  constructor(private fb: FormBuilder) {
    
   }
   
  ngOnInit() {
    this.createDemo = this.fb.group({
      bussName: [' '],
      bussLogo: [' '],
      discription: [' '],
      contact: [' '],
      email: [' '],
      images: [' ']
    });
  }

}
