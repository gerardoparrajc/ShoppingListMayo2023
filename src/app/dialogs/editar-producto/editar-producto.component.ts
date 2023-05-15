import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent {
  formulario!: FormGroup;

  constructor(
    private dialog: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProducto: Producto
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.datosProducto.nombre, Validators.required),
      unidades: new FormControl(this.datosProducto.unidades, [Validators.required, Validators.max(10)]),
    });
  }

  cancelar() {
    this.dialog.close();
  }

  doSubmit() {
    this.datosProducto.nombre = this.formulario.get('nombre')?.value;
    this.datosProducto.unidades = this.formulario.get('unidades')?.value;
    this.dialog.close(this.datosProducto);
  }
}
