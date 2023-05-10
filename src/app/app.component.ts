import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { ListasCompraService } from './services/listas-compra.service';
import { ListaCompra } from './models/lista-compra';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  listasCompra: ListaCompra[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private listasCompraService: ListasCompraService
  ) {}

  ngOnInit(): void {
    this.listasCompraService.getListasCompra().subscribe({
      next: (datos) => console.log(datos),
      error: (error) => console.log(error),
    });


    /* const producto1: Producto = {
      nombre: 'Leche',
      unidades: 2,
      marcado: false
    }

    const producto2: Producto = {
      nombre: 'Yogurt',
      unidades: 8,
      marcado: false
    }

    const producto3: Producto = {
      nombre: 'Pan',
      unidades: 3,
      marcado: false
    }

    this.listasCompraService.addProductoToLista(1, producto1).subscribe({
      next: (respuesta) => console.log(respuesta),
      error: (error) => console.log(error)
    });

    this.listasCompraService.addProductoToLista(1, producto2).subscribe({
      next: (respuesta) => console.log(respuesta),
      error: (error) => console.log(error)
    });

    this.listasCompraService.addProductoToLista(2, producto3).subscribe({
      next: (respuesta) => console.log(respuesta),
      error: (error) => console.log(error)
    }); */



  }
}
