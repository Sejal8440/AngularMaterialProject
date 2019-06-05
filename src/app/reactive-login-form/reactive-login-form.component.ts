import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../side-bar/side-bar.component';
import { DateValidationDirective } from '../date-validation.directive';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { LoginGuardService } from '../login-guard.service';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {
  
  errorMessage:string;
  profileForm:FormGroup;
  constructor(public dialog: MatDialog, private authService: UserAuthService,
    private router: Router) { }
    
  login(loginForm:NgForm){
    if (loginForm && loginForm.valid) {
      const uName = loginForm.form.value.uName;
      const uPassword = loginForm.form.value.uPassword;
      if(!uName || !uPassword){
      alert("Please enter Username and Password");
      }
      else{
      this.authService.logIn(uName,uPassword );
      }
  
  if (this.authService.redirectURL) {
    this.router.navigateByUrl(this.authService.redirectURL);
    } else {
    this.router.navigate(['/']);
    }
    } else {
    this.errorMessage = 'Please enter a user name and password.';
    }
  }
   

  ngOnInit() {
    this.profileForm= new FormGroup({
     uName:new FormControl(null, [Validators.required]),
     uPassword:new FormControl(null, [Validators.required])
    });
  }
  onSubmit(){
    
    if(this.profileForm.value.uName=='admin' && this.profileForm.value.uPassword=='admin'){
      alert("working");
    }
   }
   registrationForm():void{
     const dialogRef = this.dialog.open(RegistrationDialog,{
      width: '500px',
     });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

   }
}
@Component({
  selector : 'registration-dialog',
  templateUrl : './registration-dialog.html',
  styleUrls: ['./registration-dialog.css']

})
export class RegistrationDialog{
  
  registrationForm:FormGroup;
  constructor(
    public dialogRef : MatDialogRef<RegistrationDialog>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData
  ){}

  ngOnInit() {
    this.registrationForm= new FormGroup({
     firstName:new FormControl(null, [Validators.required]),
     lastName:new FormControl(null, [Validators.required]),
     contactNumber:new FormControl(null, [Validators.required]),
     email:new FormControl(null, [Validators.required]),
     dateOfBirth:new FormControl(null, [Validators.required,this.dateofbirthValidation.bind(this)]),
     userName:new FormControl(null, [Validators.required]),
     userPassword:new FormControl(null, [Validators.required]),
     confirmPassword:new FormControl(null, [Validators.required])
    });
  }
  onNoClick():void{
    this.dialogRef.close();
  }
  dateofbirthValidation(control : AbstractControl) :{[key:string]:any} | null {
    const dob = control.value;
    if(dob > 18)
    {
      return null;
    }
    else
    {
      return {'dob should be more than 18':true};
    }

      
  }
}
