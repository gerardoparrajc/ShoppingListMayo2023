import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss'],
})
export class EliminarProductoComponent {
  constructor(private dialog: MatDialogRef<EliminarProductoComponent>) {}

  cancelar() {
    this.dialog.close();
  }
}
