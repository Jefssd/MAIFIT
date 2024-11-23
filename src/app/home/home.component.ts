import { Router, RouterLink } from '@angular/router'; // Importando o Router
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importação correta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Função para redirecionar para a página do carrinho
  goToCart(): void {
    this.router.navigate(['/carrinho']); // Navega para a rota de carrinho
  }
}
