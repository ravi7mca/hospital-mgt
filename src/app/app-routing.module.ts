import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppointmantComponent } from './components/appointmant/appointmant.component';
import { AdminComponent} from './components/admin/admin.component'
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:'appointment',component: AppointmantComponent },
  {path:'admin', component: AdminComponent },
  {path: 'about-us', component: AboutUsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
