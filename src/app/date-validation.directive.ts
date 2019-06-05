import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[DateValidation][ngModel]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:DateValidationDirective,
    multi:true
  }]
})
 export class DateValidationDirective  {
   
 validate(control: AbstractControl): { [key: string]: any } | null {
   console.log("In function");
    return control.value > 0 ?null:{isDateFalse:true };
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }
  constructor() { }
    

 }
