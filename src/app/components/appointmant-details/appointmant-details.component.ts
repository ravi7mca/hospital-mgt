import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service'
import { Appointment } from 'src/app/Appointment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-appointmant-details',
  templateUrl: './appointmant-details.component.html',
  styleUrls: ['./appointmant-details.component.scss']
})
export class AppointmantDetailsComponent implements OnInit {
  fromDate!: Date;
  toDate!: Date;
  appointmentsDetails: Appointment[] = [];
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    //this.appointmentService.getAllAppointment().subscribe((appointments) => (this.appointmentsDetails = appointments));
  }

  searchAppointmentDetails(){
    this.appointmentService.getAllAppointment()
    .subscribe(posts =>{
     this.appointmentsDetails = posts;
    })
    // .subscribe((appointments) => 
    //     (this.appointmentsDetails = appointments.filter(item => {
    //       let date = new Date(item.appointmentDate);
    //       return date >= this.fromDate && date <= this.toDate;
    //       })));
  }

}
