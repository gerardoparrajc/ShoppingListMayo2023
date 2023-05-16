import { ActionReducerMap } from "@ngrx/store";
import { ListasCompraState } from "./models/listas-compra.state";
import { listasCompraReducer } from "./reducers/listas-compra.reducers";

export interface AppState {
  listasCompra: ListasCompraState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  listasCompra: listasCompraReducer,
};
