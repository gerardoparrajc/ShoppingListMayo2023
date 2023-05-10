import { Injectable } from '@angular/core';
import { ListaCompra } from '../models/lista-compra';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListasCompraService {

  private currentId: number = 0;
  private listasCompra: ListaCompra[] = [];

  constructor(private http: HttpClient) { }

  createListaCompra(listaCompra: ListaCompra) {
    listaCompra.id = String(this.currentId++);
    this.listasCompra.push(listaCompra);
  }

  getListasCompra(): Promise<ListaCompra[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          // Proceso muy largo
          console.log(this.listasCompra);
          resolve(this.listasCompra);
        } else {
          // Si hay error
          reject('Memoria llena');
        }
      }, 1500);

    });
  }

  getDatos(): Observable<number> {
    const observable = Observable.create((observer: any) => {
      let contador = 0;
      setInterval(() => {
        if (contador === 10) {
          observer.complete();
        }

        observer.next(contador++);
      }, 1000);
    });

    return observable;
  }

  getListaCompra(idLista: string): ListaCompra | undefined {
    return this.listasCompra.find(element => element.id === idLista);
  }
}
