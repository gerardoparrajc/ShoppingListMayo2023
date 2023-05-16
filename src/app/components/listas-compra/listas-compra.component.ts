import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NuevaListaComponent } from 'src/app/dialogs/nueva-lista/nueva-lista.component';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ListasCompraService } from 'src/app/services/listas-compra.service';
import { cargarListas, listasCargadas } from 'src/app/states/actions/listas-compra.actions';
import { loadingListasCompraSelector } from 'src/app/states/selectors/listas-compra.selectors';

@Component({
  selector: 'app-listas-compra',
  templateUrl: './listas-compra.component.html',
  styleUrls: ['./listas-compra.component.scss'],
})
export class ListasCompraComponent implements OnInit {
  listasCompra: ListaCompra[] = [];
  loading$: Observable<boolean> = new Observable();

  constructor(
    private listasCompraService: ListasCompraService,
    private dialog: MatDialog,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(loadingListasCompraSelector);

    this.store.dispatch(cargarListas());

    this.listasCompraService.getListasCompra().subscribe({
      next: (respuesta: any) => {
        if (respuesta.success) {
          this.store.dispatch(listasCargadas({ items: respuesta.data }));
        }
      },
      error: (error) => console.log(error)
    });

    /* this.listasCompraService.getListasCompra().subscribe({
      next: (respuesta: any) => {
        if (respuesta.success) {
          this.listasCompra = respuesta.data;
        } else {
          alert('Se ha producido un error al obtener las listas de la compra');
          console.log(respuesta);
        }
      },
      error: (error) => {
        alert('Se ha producido un error al obtener las listas de la compra');
        console.log(error);
      },
    }); */
  }

  showNewListaDialog() {
    const dialog = this.dialog.open(NuevaListaComponent);

    dialog.afterClosed().subscribe({
      next: (resultado) => {
        if (resultado) {
          const lista: ListaCompra = {
            nombre: resultado,
            productos: []
          };
          this.listasCompraService.createListaCompra(lista).subscribe({
            next: (respuesta: any) => {
              if (respuesta.success) {
                this.listasCompra = respuesta.data;
              } else {
                alert('No se ha podido añadir la lista de la compra');
                console.log(respuesta);
              }
            },
            error: (error) => {
              alert('No se ha podido añadir la lista de la compra');
              console.log(error);
            }
          })
        }
      },
      error: (error) => console.log(error)
    });
  }

  onListaActualizada(listas: ListaCompra[]) {
    this.listasCompra = listas;
  }
}
