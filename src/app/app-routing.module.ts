import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenComponent} from './men/men.component';
import {WomenComponent} from './women/women.component';
import {KidsComponent} from './kids/kids.component';
import {HomeAndLivingComponent} from './home-and-living/home-and-living.component';

const routes: Routes = [{
  path: 'Men',
  component:  MenComponent
  
},
{
  path: 'Women',
  component:  WomenComponent
},
{
  path: 'Kids',
  component:  KidsComponent 
},

{
  path: 'Home_and_Living',
  component:  HomeAndLivingComponent
},

{
  path: '',
  redirectTo: '/men',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/men',
  pathMatch: 'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
