import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NuevaListaComponent } from 'src/app/dialogs/nueva-lista/nueva-lista.component';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-listas-compra',
  templateUrl: './listas-compra.component.html',
  styleUrls: ['./listas-compra.component.scss'],
})
export class ListasCompraComponent implements OnInit {
  listasCompra: ListaCompra[] = [];

  constructor(
    private listasCompraService: ListasCompraService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listasCompraService.getListasCompra().subscribe({
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
    });
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
