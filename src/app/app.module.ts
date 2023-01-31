import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { ButtonComponent } from './components/button/button.component';
import {HeaderComponent} from './components/header/header.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { AppointmantComponent } from './components/appointmant/appointmant.component';
import { AppointmantDetailsComponent } from './components/appointmant-details/appointmant-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { UserMenuComponent } from './components/menu/user-menu/user-menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAppointmentComponent,
    ButtonComponent,
    HeaderComponent,
    DateTimeComponent,
    AppointmantComponent,
    AppointmantDetailsComponent,
    AdminComponent,
    UserMenuComponent,
    AboutUsComponent
  ],

  //exports: [MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }
  
 }
