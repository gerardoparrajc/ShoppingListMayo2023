import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.scss'],
})
export class EditarListaComponent {

  formulario!: NgForm;

  constructor(
    private dialog: MatDialogRef<EditarListaComponent>,
    @Inject(MAT_DIALOG_DATA) public nombreLista: string
  ) {

  }

  cancelar() {
    this.dialog.close();
  }

  doSubmit(formulario: NgForm) {
    this.dialog.close(formulario.value.nombreLista);
  }
}
