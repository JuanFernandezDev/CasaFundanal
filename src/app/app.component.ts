import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BotonFlotanteComponent } from './Components/boton-flotante/boton-flotante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    BotonFlotanteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CasaFundanal';
}
