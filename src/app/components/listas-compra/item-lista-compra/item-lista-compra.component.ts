import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarListaComponent } from 'src/app/dialogs/editar-lista/editar-lista.component';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-item-lista-compra',
  templateUrl: './item-lista-compra.component.html',
  styleUrls: ['./item-lista-compra.component.scss']
})
export class ItemListaCompraComponent {

  @Input() lista!: ListaCompra;

  constructor(
    private dialog: MatDialog,
    private listasCompraService: ListasCompraService
  ) {}

  cancelarClick(evt: MouseEvent) {
    evt.stopPropagation();
  }

  showDialogEditarLista() {
    const dialog = this.dialog.open(EditarListaComponent, {
      data: this.lista.nombre
    });

    dialog.afterClosed().subscribe({
      next: (resultado) => {
        if (resultado.trim()) {
          this.lista.nombre = resultado;
          this.listasCompraService.updateListaCompra(this.lista).subscribe({
            next: (respuesta) => console.log(respuesta),
            error: (error) => console.log(error)
          });
        }
      },
      error: (error) => console.log(error)
    });
  }

  showDialogEliminarLista() {

  }

}
