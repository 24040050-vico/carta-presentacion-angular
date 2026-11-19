import { Component } from '@angular/core';

@Component({
  selector: 'app-carta-jose',
  imports: [],
  templateUrl: './carta-jose.html',
  styleUrl: './carta-jose.css'
})
export class CartaJose {
  saludo: string = this.obtenerSaludo();
  anio: number = new Date().getFullYear();

  private obtenerSaludo(): string {
    const hora = new Date().getHours();
    if (hora < 12) {
      return '¡Buenos días!';
    } else if (hora < 19) {
      return '¡Buenas tardes!';
    }
    return '¡Buenas noches!';
  }
}