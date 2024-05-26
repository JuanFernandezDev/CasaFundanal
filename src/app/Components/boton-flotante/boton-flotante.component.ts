import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-boton-flotante',
  standalone: true,
  imports: [],
  templateUrl: './boton-flotante.component.html',
  styles: ``,
})
export class BotonFlotanteComponent {
  openWhatsApp() {
    const telefono = '608578001';
    window.open(`https://wa.me/${telefono}`, '_blank');
  }
}
