import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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

  }
}
