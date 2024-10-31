import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
import {  OpenpageComponent } from "./openpage/openpage.component";
import { ReviewpageComponent } from "./reviewpage/reviewpage.component";
import { SignupComponent } from "./signup/signup.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthorGuard } from "./Guards/author.guard";

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'nav',component:NavComponent,canActivate:[AuthorGuard]},
{path:'openpage',component:OpenpageComponent,canActivate:[AuthorGuard]},
{path:'review',component:ReviewpageComponent,canActivate:[AuthorGuard]},
{path:'Signup',component:SignupComponent},
{path:'footer',component:FooterComponent},
{path:'',redirectTo:'/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
