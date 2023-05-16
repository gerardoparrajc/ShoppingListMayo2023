import { createReducer, on } from "@ngrx/store"
import { cargarListas } from "../actions/listas-compra.actions"
import { ListasCompraState } from "../models/listas-compra.state";

export const initialState: ListasCompraState = {
  loading: false,
  items: []
}

export const listasCompraReducer = createReducer(
  initialState,
  on(cargarListas, (state) => {
    return {...state, loading: true}
  })
);
