import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { ListasCompraService } from './services/listas-compra.service';
import { ListaCompra } from './models/lista-compra';
import { Producto } from './models/producto';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listasCompra: ListaCompra[] = [];
  mostrarFormularios: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private listasCompraService: ListasCompraService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    console.log(environment);

    this.router.events.forEach((e: any) => {
      if (e instanceof NavigationEnd) {
        if (
          this.route.root.firstChild?.snapshot.routeConfig?.path === 'login' ||
          this.route.root.firstChild?.snapshot.routeConfig?.path === 'registro' ||
          this.route.root.firstChild?.snapshot.routeConfig?.path === '**'
        ) {
          this.mostrarFormularios = true;
        } else {
          this.mostrarFormularios = false;
        }
      }
    });
  }

  doLogout() {
    this.authService.logout();
    this.snackBar.open(
      'Se ha cerrado la sesión correctamente. Vuelve pronto',
      'Ok',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
      }
    );
    this.mostrarFormularios = true;
    this.router.navigate(['/login']);

  }
}
