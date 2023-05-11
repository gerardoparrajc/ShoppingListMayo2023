import { Producto } from "./producto";

export interface ListaCompra {
  id?: number;
  nombre: string;
  productos: Producto[];
  createdAt?: Date;
  updatedAt?: Date;
}
