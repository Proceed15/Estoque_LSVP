import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  //definição do formulário de login
  loginForm!: FormGroup;
  
  
  constructor(private auth: AuthenticationService, 
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router){}

 


  ngOnInit(): void {
    //inicialização do formulário
    //criação do formulário com os campos necessários
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm(event: Event): void {
    this.auth.login(this.loginForm); //chamada do serviço de autenticação
    event.preventDefault(); //previne o comportamento padrão do formulário
  }
  
  
}