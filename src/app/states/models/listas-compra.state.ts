import { ListaCompra } from "src/app/models/lista-compra";

export interface ListasCompraState {
  loading: boolean;
  items: ReadonlyArray<ListaCompra>;
}
