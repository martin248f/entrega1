import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup;
  estadoFormulario:any;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  send():any {
    console.log(this.form.value)
  }
  
}
