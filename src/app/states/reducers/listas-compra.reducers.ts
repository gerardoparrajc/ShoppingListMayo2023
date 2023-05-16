import { createReducer, on } from "@ngrx/store"
import { ListaCompra } from "src/app/models/lista-compra"
import { cargarListas } from "../actions/listas-compra.actions"

export const initialState: {
  loading: boolean,
  items: ReadonlyArray<ListaCompra>
} = {
  loading: false,
  items: []
}

export const listasCompraReducer = createReducer(
  initialState,
  on(cargarListas, (state) => {
    return {...state, loading: true}
  })
);
