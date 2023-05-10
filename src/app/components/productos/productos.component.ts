import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../models/producto';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private listasCompraService: ListasCompraService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.listasCompraService.getProductosFromLista(params['id']).subscribe({
          next: (respuesta: any) => {
            if (respuesta.success) {
              this.productos = respuesta.data;
            } else {
              alert('Se ha producido un error al obtener los productos de la lista de la compra.')
              console.log(respuesta);
            }
          },
          error: (error) => {
            alert('Se ha producido un error al obtener los productos de la lista de la compra.')
            console.log(error);
          }
        });
      },
      error: (error) => {
        alert('Se ha producido un error al obtener los productos de la lista de la compra.')
        console.log(error);
      }
    });
  }

}
