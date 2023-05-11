import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private dialog: MatDialogRef<NuevoProductoComponent>) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      unidades: new FormControl('', [Validators.required, Validators.max(10)])
    });
  }

  cancelar() {
    this.dialog.close();
  }

  doSubmit() {
    this.dialog.close(this.formulario.value);
  }

}
