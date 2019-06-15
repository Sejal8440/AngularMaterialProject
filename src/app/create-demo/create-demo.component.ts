import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PeriodicElement } from '../periodic-element';
import { MatTableDataSource } from '@angular/material';



// export interface PeriodicElement {
//   bussName: string;
//   discription: string;
//   contact: string;
//   email: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {bussName: '', discription: '', contact: '', email: ''},
  
// ];


@Component({
  selector: 'app-create-demo',
  templateUrl: './create-demo.component.html',
  styleUrls: ['./create-demo.component.css']
})


export class CreateDemoComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [];  
  displayedColumns: string[] = ['bussName','discription','contact','email'];
  // arr1:PeriodicElement[]=this.displayedColumns;
 
  submitted = false;
  // buss:string;
  createDemo:FormGroup;
  bussName:string='';
  bussLogo:string='';
  
  dataSource:MatTableDataSource<PeriodicElement>;
  discription:string='';
  contact:string='';
  email:string='';
  images:string='';
  
  
  constructor(private fb: FormBuilder) {
    
   }
   
  ngOnInit() {
    this.createDemo = this.fb.group({
      bussName: [null, Validators.required],
      // bussLogo: [null, Validators.required],
      discription: [null, Validators.compose([Validators.required, Validators.maxLength(500)])],
      contact: [null, Validators.required],
      email: [null, Validators.required],
      // images: [null, Validators.required]
      
    });
  }
  onSubmit(){
   console.log(this.createDemo.value.bussName); 
    this.ELEMENT_DATA.push(this.createDemo.value.bussName,
    this.createDemo.value.discription,
    this.createDemo.value.contact,
    this.createDemo.value.email);
    this.submitted= true;
    this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
    console.log(this.dataSource);
      console.log(this.createDemo);
    }

}

