import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }) */

    this.formulario = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  doLogin() {
    const username = this.formulario.get('username')?.value;
    const password = this.formulario.get('password')?.value;
    this.authService.login(username, password).subscribe({
      next: (respuesta: any) => {
        this.snackBar.open('Se ha identificado correctamente. Bienvenido', 'Gracias', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
        });
        this.authService.isLogged = true;
        this.router.navigate(['/']);
      },
      error: (error) => {
        let mensaje = '';
        switch (error.status) {
          case 400:
            mensaje = 'Nombre de usuario o contraseña inválidos';
            break;

          default:
            mensaje = 'Se ha producido un error';
            break;
        }

        this.snackBar.open(mensaje, 'Ok', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

}
