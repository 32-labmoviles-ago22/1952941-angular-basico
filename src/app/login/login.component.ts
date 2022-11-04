import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /*function miValidator(c: AbstractControl): {[key: string]:boolean}|null{
    return: null;
  }*/

  //elemenros del formulario de login
  loginForm: FormGroup= new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('', Validators.minLength(9))
  });

  loginSubmit(){
    console.log("se submitio el formulario")
  }

//elementos del formulario de registro
  registroForm: FormGroup= new FormGroup({
    nombre: new FormControl('',Validators.required),
    email: new FormControl('',  Validators.required),
    password: new FormControl('', Validators.minLength(9))
  });

  registroSubmit(){
    console.log("se submitio el formulario")
  }

}
