import { Component, OnInit } from '@angular/core';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ListasCompraService } from 'src/app/services/listas-compra.service';

@Component({
  selector: 'app-listas-compra',
  templateUrl: './listas-compra.component.html',
  styleUrls: ['./listas-compra.component.scss'],
})
export class ListasCompraComponent implements OnInit {
  listasCompra: ListaCompra[] = [];

  constructor(private listasCompraService: ListasCompraService) {}

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
    console.log('Click');
  }
}
