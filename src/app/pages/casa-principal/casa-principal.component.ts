import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    InputNumberModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './casa-principal.component.html',
  providers: [provideNativeDateAdapter()],
  styles: ``,
})
export default class CasaPrincipalComponent {
  imagenes = Array.from(
    { length: 9 },
    (_, i) => `assets/Img/PaginaNueva/CasaAbajo/Foto${i + 1}.jpeg`
  );

  imagenGrande: string = 'assets/Img/PaginaNueva/CasaAbajo/Foto2.jpeg';

  mostrarImagen(imagen: string) {
    this.imagenGrande = imagen;
  }

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group(
      {
        adultos: [
          '',
          [Validators.required, Validators.min(0), Validators.max(8)],
        ],
        niños: [
          '',
          [Validators.required, Validators.min(0), Validators.max(8)],
        ],
      },
      { validators: this.totalSumValidator }
    );
  }

  totalSumValidator(form: FormGroup) {
    const adultosValue = form.get('adultos')?.value || 0;
    const niñosValue = form.get('niños')?.value || 0;
    const total = adultosValue + niñosValue;
    return total <= 8 ? null : { totalSumExceeded: true };
  }

  cambiarImagen(direccion: 'anterior' | 'siguiente'): void {
    const indexActual = this.imagenes.indexOf(this.imagenGrande);
    if (direccion === 'anterior') {
      const nuevoIndex =
        indexActual === 0 ? this.imagenes.length - 1 : indexActual - 1;
      this.imagenGrande = this.imagenes[nuevoIndex];
    } else {
      const nuevoIndex =
        indexActual === this.imagenes.length - 1 ? 0 : indexActual + 1;
      this.imagenGrande = this.imagenes[nuevoIndex];
    }
  }

  trackByFn(index: number, item: string): number {
    return index;
  }
}
