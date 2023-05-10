import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { ListasCompraService } from './services/listas-compra.service';
import { ListaCompra } from './models/lista-compra';

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
    const lista: ListaCompra = {
      nombre: 'Lidl',
      productos: []
    }

    /* this.listasCompraService.createListaCompra(lista).subscribe({
      next: (datos) => console.log(datos),
      error: (error) => console.log(error)
    }); */

    this.listasCompraService.getListasCompra().subscribe({
      next: (datos) => console.log(datos),
      error: (error) => console.log(error),
    });
  }
}
