import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [FormsModule], // Importamos FormsModule para usar ngModel
})
export class FormularioComponent {
  nombre: string = '';
  gmail: string = '';
  resultado: string = '';

  enviar(event: Event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    if ( this.nombre == "" || this.gmail == "") {
      alert("datos obligatorios");
      return;
    }

    this.resultado += `Nombre: ${this.nombre}, Gmail: ${this.gmail} <br>`;
    this.nombre = ""
    this.gmail = ""
  }
}
