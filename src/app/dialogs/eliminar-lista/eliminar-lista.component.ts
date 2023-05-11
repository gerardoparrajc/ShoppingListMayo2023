import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-lista',
  templateUrl: './eliminar-lista.component.html',
  styleUrls: ['./eliminar-lista.component.scss'],
})
export class EliminarListaComponent {

  constructor(private dialog: MatDialogRef<EliminarListaComponent>) {}

  cancelar() {
    this.dialog.close();
  }
}
