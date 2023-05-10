export interface Producto {
  id?: number,
  nombre: string,
  unidades: number,
  marcado: boolean,
  ListasCompraId?: number,
  createdAt?: Date,
  updatedAt?: Date
}
