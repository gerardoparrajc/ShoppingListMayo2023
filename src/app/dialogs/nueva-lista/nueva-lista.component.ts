import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-lista',
  templateUrl: './nueva-lista.component.html',
  styleUrls: ['./nueva-lista.component.scss']
})
export class NuevaListaComponent {

  // nombreLista: string = '';

  constructor(private dialog: MatDialogRef<NuevaListaComponent>) {}

  cancelar() {
    this.dialog.close();
  }

  aceptar(formulario: NgForm) {
    this.dialog.close(formulario.value.nombreLista);
  }

}
