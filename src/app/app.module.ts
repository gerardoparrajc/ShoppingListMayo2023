import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListasCompraComponent } from './components/listas-compra/listas-compra.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NuevaListaComponent } from './dialogs/nueva-lista/nueva-lista.component';
import { NuevoProductoComponent } from './dialogs/nuevo-producto/nuevo-producto.component';
import { ItemListaCompraComponent } from './components/listas-compra/item-lista-compra/item-lista-compra.component';
import { EditarListaComponent } from './dialogs/editar-lista/editar-lista.component';
import { EliminarListaComponent } from './dialogs/eliminar-lista/eliminar-lista.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemProductoComponent } from './components/productos/item-producto/item-producto.component';
import { EditarProductoComponent } from './dialogs/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './dialogs/eliminar-producto/eliminar-producto.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { listasCompraReducer } from './states/reducers/listas-compra.reducers';
import { ROOT_REDUCERS } from './states/app.state';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    ListasCompraComponent,
    ProductosComponent,
    NuevaListaComponent,
    NuevoProductoComponent,
    ItemListaCompraComponent,
    EditarListaComponent,
    EliminarListaComponent,
    LoginComponent,
    RegistroComponent,
    PageNotFoundComponent,
    ItemProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
