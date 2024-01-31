import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './pag-principal.component.html',
  styles: ``,
})
export default class PagPrincipalComponent {
  title = 'Main';
}
