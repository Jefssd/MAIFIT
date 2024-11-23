import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent, } from './home/home.component';
import { CartComponent, } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CartComponent], // Inclui o HomeComponent na lista de imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  title = 'mai-fit';
}
