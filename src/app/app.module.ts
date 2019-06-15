import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { routing } from './app.routing';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveLoginFormComponent, RegistrationDialog } from './reactive-login-form/reactive-login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateValidationDirective } from './date-validation.directive';
import { CreateDemoComponent } from './create-demo/create-demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material';

import { FileSelectDirective } from 'ng2-file-upload';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MaterialTableComponent } from './material-table/material-table.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutUsComponent,
    BlogComponent,
    ContactusComponent,
    ReactiveLoginFormComponent,
    RegistrationDialog,
    DateValidationDirective,
    CreateDemoComponent,
    FileSelectDirective,
    MaterialTableComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    routing,
    ScrollingModule,
    MatFormFieldModule,
    MatFileUploadModule,
    HttpClientModule
   
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ReactiveLoginFormComponent, RegistrationDialog]
})
export class AppModule { }
