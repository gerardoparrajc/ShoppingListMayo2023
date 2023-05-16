import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ListasCompraState } from "../models/listas-compra.state";

export const selectListasCompra = (state: AppState) => state.listasCompra;

export const listasCompraSelector = createSelector(
  selectListasCompra,
  (state: ListasCompraState) => state.items
);

export const loadingListasCompraSelector = createSelector(
  selectListasCompra,
  (state: ListasCompraState) => state.loading
);
