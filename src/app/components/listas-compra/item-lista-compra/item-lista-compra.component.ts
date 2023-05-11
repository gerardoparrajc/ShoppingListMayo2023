import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarListaComponent } from 'src/app/dialogs/editar-lista/editar-lista.component';
import { EliminarListaComponent } from 'src/app/dialogs/eliminar-lista/eliminar-lista.component';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-item-lista-compra',
  templateUrl: './item-lista-compra.component.html',
  styleUrls: ['./item-lista-compra.component.scss']
})
export class ItemListaCompraComponent {

  @Input() lista!: ListaCompra;
  @Output() listaActualizada: EventEmitter<ListaCompra[]> = new EventEmitter<ListaCompra[]>();

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
    const dialog = this.dialog.open(EliminarListaComponent);

    dialog.afterClosed().subscribe({
      next: (respuesta: boolean) => {
        if (respuesta) {
          this.listasCompraService.deleteListaCompra(this.lista.id as number).subscribe({
            next: (resultado: any) => {
              if (resultado.success) {
                this.listaActualizada.emit(resultado.data);
              }
            },
            error: (error) => console.log(error)
          });
        }
      },
      error: (error) => console.log(error)
    });
  }

}
