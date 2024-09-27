import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Datos jefe';
  codJefe: string = '';
  correoJefe: string = '';
  nombresJefe: string = '';
  apellidosJefe: string = '';

  constructor(private dataService: DataService) {}
  onSubmit() {
    const jefe = {
      codJefe: this.codJefe,
      correoJefe: this.correoJefe,
      nombresJefe: this.nombresJefe,
      apellidosJefe: this.apellidosJefe,
    };
  
    this.dataService.sendData(jefe).subscribe(
      (response) => {
        console.log('Data sent successfully!', response);
        // Aquí puedes manejar la respuesta del backend
        // Por ejemplo, limpiar los campos o mostrar un mensaje de éxito
        this.clearForm();
      },
      (error) => {
        console.error('Error sending data:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    );
  }
  
  // Método para limpiar el formulario
  clearForm() {
    this.codJefe = '';
    this.correoJefe = '';
    this.nombresJefe = '';
    this.apellidosJefe = '';
  }
}