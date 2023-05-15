import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { ListasCompraService } from 'src/app/services/listas-compra.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevoProductoComponent } from 'src/app/dialogs/nuevo-producto/nuevo-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  idLista: number = -1;
  sinListaSeleccionada: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private listasCompraService: ListasCompraService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.idLista = params['id'];
        if (this.idLista && this.idLista !== -1) {
          this.sinListaSeleccionada = false;
          this.actualizarListaCompra();
        }
      },
      error: (error) => {
        alert('Se ha producido un error al obtener los productos de la lista de la compra.');
        this.sinListaSeleccionada = true;
        console.log(error);
      }
    });
  }

  private actualizarListaCompra() {
    this.listasCompraService.getProductosFromLista(this.idLista).subscribe({
      next: (respuesta: any) => {
        if (respuesta.success) {
          this.sinListaSeleccionada = false;
          this.productos = respuesta.data;
        } else {
          alert('Se ha producido un error al obtener los productos de la lista de la compra.');
          this.sinListaSeleccionada = true;
          console.log(respuesta);
        }
      },
      error: (error) => {
        alert('Se ha producido un error al obtener los productos de la lista de la compra.');
        this.sinListaSeleccionada = true;
        console.log(error);
      }
    });
  }

  showAnadirProducto() {
    const dialog = this.dialog.open(NuevoProductoComponent);

    dialog.afterClosed().subscribe({
      next: (resultado: Producto) => {
        if (resultado) {
          console.log(resultado);
          this.listasCompraService.addProductoToLista(this.idLista, resultado).subscribe({
            next: (respuesta) => this.actualizarListaCompra(),
            error: (error) => console.log(error)
          });
        }
      },
      error: (error) => console.log(error)
    });
  }

}
