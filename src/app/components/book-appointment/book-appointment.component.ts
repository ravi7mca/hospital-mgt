import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Appointment } from 'src/app/Appointment';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  @Output() onGetAppointment: EventEmitter<Appointment> = new EventEmitter();
  name!: string;
  age!: number;
  gender!: string;
  mobileNumber!:string;
  appointmentDate!: Date;  
  appointmentTime!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.name) {
      alert('Please enter name!');
      return;
    }
    if (!this.age) {
      alert('Please enter age!');
      return;
    }
    if (!this.gender) {
      alert('Please select gender!');
      return;
    }
    if (!this.mobileNumber) {
      alert('Please enter mobile number!');
      return;
    }
    if (!this.appointmentDate) {
      alert('Please select appointment date!');
      return;
    }
    if (!this.appointmentTime) {
      alert('Please select appointment time!');
      return;
    }

    const newAppointment = {
      name: this.name,
      age: this.age,
      mobileNumber: this.mobileNumber,
      gender: this.gender,
      appointmentDate: this.appointmentDate.toDateString(),
      appointmentTime: this.appointmentTime
    }

    //console.log(newAppointment);
    //this.onGetAppointment.emit(newAppointment);

    this.http.post('https://healthcare-c1cd5-default-rtdb.firebaseio.com/posts.json',
     newAppointment
     )
     .subscribe(responseData => {
        console.log(responseData);
     });

    alert('Appointment is successfully booked on '+ this.appointmentDate.toDateString () +' at '+ this.appointmentTime +'');

    this.name = "";
    this.age = 0;
    this.gender = "";
    this.mobileNumber = "";
    this.appointmentDate;
    this.appointmentTime = "";

  }

}
