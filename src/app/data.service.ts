import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/api/test/jefe'; // Cambia esto si es necesario

  constructor(private http: HttpClient) {}

  sendData(jefe: { codJefe: string; correoJefe: string; nombresJefe: string; apellidosJefe: string; }): Observable<any> {
    return this.http.post<any>(this.apiUrl, jefe);
  }

}
