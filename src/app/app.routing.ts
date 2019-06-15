import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';
import { CreateDemoComponent } from './create-demo/create-demo.component';
import { LoginGuardService } from './login-guard.service';

const arr: Routes = [
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact us', component: ContactusComponent},
    {path: 'login', component: ReactiveLoginFormComponent},
    {path: 'create demo', canActivate:[LoginGuardService], component: CreateDemoComponent},
    {path: '**', component: PagenotfoundComponent}
   ];

 export const routing = RouterModule.forRoot(arr);