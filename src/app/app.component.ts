import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importando RouterOutlet para renderizar as páginas de acordo com as rotas
import { HomeComponent } from './home/home.component'; // Importando HomeComponent
import { CartComponent } from './cart/cart.component'; // Importando CartComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, CartComponent], // Incluindo RouterOutlet e os componentes que você usará
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Certifique-se de que o caminho está correto
})
export class AppComponent {
  title = 'mai-fit';
}
