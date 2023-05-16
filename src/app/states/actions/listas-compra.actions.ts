import { createAction, props } from "@ngrx/store";
import { ListaCompra } from "src/app/models/lista-compra";

export const cargarListas = createAction('[ListasCompra] Cargar listas');

export const listasCargadas = createAction(
  '[ListasCompra] Listas cargadas',
  props<{ items: ListaCompra[] }>()
);
