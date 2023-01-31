import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointmant',
  templateUrl: './appointmant.component.html',
  styleUrls: ['./appointmant.component.scss']
})
export class AppointmantComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {  
  }

  ngOnInit(): void {
    this.appointmentService.getAllAppointment().subscribe((appointments) => (this.appointments = appointments));
  }

  getAppointment(newAppointment: Appointment): void  {

    this.appointmentService.getAppointment(newAppointment).subscribe((newAppointment) => this.appointments.push(newAppointment));
  }

}
