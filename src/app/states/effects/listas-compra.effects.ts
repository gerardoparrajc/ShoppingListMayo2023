import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { ListasCompraService } from "src/app/services/listas-compra.service";

@Injectable()
export class ListasCompraEffects {
  cargarListasCompra$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ListasCompra] Cargar listas'),
      mergeMap(() =>
        this.listasCompraService.getListasCompra().pipe(
          map((resultado: any) => ({
            type: '[ListasCompra] Listas cargadas',
            items: resultado.data,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private listasCompraService: ListasCompraService
  ) {}
}
