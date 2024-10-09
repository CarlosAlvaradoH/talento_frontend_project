import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      vehiculoMarca: ['', Validators.required],
      vehiculoModelo: ['', [Validators.required, Validators.min(1900)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Aquí puedes realizar el envío de los datos al backend
      // Ejemplo: this.http.post('url_backend', this.registerForm.value).subscribe();
    } else {
      console.log('Formulario no válido');
    }
  }

  ngOnInit(): void {
  }

}

