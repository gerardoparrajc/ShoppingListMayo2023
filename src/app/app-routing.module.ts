import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'listas-compra', redirectTo: '/', pathMatch: 'full' },
  { path: 'listas-compra/:id', component: ProductosComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
