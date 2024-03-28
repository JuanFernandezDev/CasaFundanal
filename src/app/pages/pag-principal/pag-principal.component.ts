import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, CarouselModule],
  templateUrl: './pag-principal.component.html',
  styles: ``,
})
export default class PagPrincipalComponent {
  title = 'Main';

  reviews = [
    {
      autor: 'María García',
      titulo: 'Una experiencia maravillosa',
      descripcion:
        'Pasamos un fin de semana increíble en esta casa rural. La ubicación es perfecta para desconectar y disfrutar de la naturaleza. La casa estaba limpia y bien equipada. ¡Definitivamente volveremos!',
      rating: 5,
    },
    {
      autor: 'Juan Pérez',
      titulo: 'Encantador y acogedor',
      descripcion:
        'Nos encantó nuestra estancia en esta casa rural. El ambiente era cálido y acogedor, y el paisaje era impresionante. Las instalaciones eran excelentes y el personal era muy amable. ¡Lo recomendamos altamente!',
      rating: 4,
    },
    {
      autor: 'Laura Martínez',
      titulo: 'Experiencia única',
      descripcion:
        'Esta casa rural superó todas nuestras expectativas. Desde el momento en que llegamos, nos sentimos bienvenidos y cuidados. La casa en sí era encantadora y las vistas eran impresionantes. Definitivamente una experiencia que recordaremos para siempre.',
      rating: 5,
    },
    {
      autor: 'Ramon Sánchez',
      titulo: 'Relajación total',
      descripcion:
        'Pasamos una semana increíblemente relajante en esta casa rural. El entorno era tranquilo y sereno, y la casa estaba bien equipada con todo lo que necesitábamos. Sin duda, el lugar perfecto para escapar del bullicio de la ciudad.',
      rating: 4,
    },
  ];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
