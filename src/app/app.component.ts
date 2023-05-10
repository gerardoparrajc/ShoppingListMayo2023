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

  async ngOnInit(): Promise<void> {
    const lista: ListaCompra = {
      nombre: 'Carrefour',
      productos: []
    }

    this.listasCompraService.createListaCompra(lista);

    /* this.listasCompraService.getListasCompra()
      .then((listas: ListaCompra[]) => {
        this.listasCompra = listas;
        console.log(listas);
      }
    ).catch((error: string) => console.log(error)); */

    try {
      this.listasCompra = await this.listasCompraService.getListasCompra();
    } catch(exception) {
      console.log(exception);
    }

    console.log('Después de la petición al servicio');

    this.listasCompraService.getDatos().subscribe({
      next: (valor: number) => console.log(valor),
      error: (error) => console.log(error),
    });
  }
}
