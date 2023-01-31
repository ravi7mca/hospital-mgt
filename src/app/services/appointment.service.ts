import { Injectable } from '@angular/core';
import { Appointment } from '../Appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  private apiUrl = 'https://healthcare-c1cd5-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) { }

  getAllAppointment(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((reponseData: { [key: string]: Appointment }) => {
        const appointmentsDetails: Appointment[] = [];
      for(const key in reponseData) {
        if(reponseData.hasOwnProperty(key)) {
          appointmentsDetails.push({ ...reponseData[key], id: +key});
        }
      }

      return appointmentsDetails;
    }));
  }

  getAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.apiUrl, appointment, httpOptions);
  }
}   
