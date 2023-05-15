import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from 'src/app/dialogs/editar-producto/editar-producto.component';
import { Producto } from 'src/app/models/producto';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss'],
})
export class ItemProductoComponent {
  @Input() producto!: Producto;

  constructor(
    private dialog: MatDialog,
    private listasCompraService: ListasCompraService
  ) {}

  cancelarClick(evt: MouseEvent) {
    evt.stopPropagation();
  }

  showDialogEditarProducto() {
    const dialog = this.dialog.open(EditarProductoComponent, {
      data: this.producto
    });

    dialog.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.listasCompraService.updateProductoFromLista(result as Producto).subscribe({
            next: (respuesta) => console.log(respuesta),
            error: (error) => console.log(error)
          });
        }
      },
      error: (error) => console.log(error)
    });
  }

  showDialogEliminarProducto() {

  }
}
