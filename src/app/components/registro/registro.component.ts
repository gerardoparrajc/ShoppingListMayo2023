import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repitePassword: ['', [Validators.required]]
    }, {
      validator: this.passwordsIguales('password', 'repitePassword')
    });
  }

  passwordsIguales(passA: string, passB: string) {
    return (formGroup: FormGroup) => {
      const controlPassA = formGroup.get(passA);
      const controlPassB = formGroup.get(passB);

      if ((controlPassA && controlPassB) && controlPassA.value !== controlPassB.value) {
        controlPassB.setErrors({ passwordsIguales: true });
      } else {
        controlPassB?.setErrors(null);
      }
    }
  }

  doRegistro() {
    const username = this.formulario.get('username')?.value;
    const password = this.formulario.get('password')?.value;

    this.authService.registro(username, password).subscribe({
      next: (respuesta) => {
        this.snackBar.open('El registro se ha realizado correctamente. Por favor, identifícate','Vamos', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
        });

        this.router.navigate(['/login']);
      },
      error: (error) => console.log(error)
    });
  }
}
