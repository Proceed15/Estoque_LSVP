import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormTemplateComponent],
  templateUrl: './form.component.html',
  styles: [`form-component.css`]
})
export class FormComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulário válido:', this.formulario.value);
      // Aqui você faria a chamada para a API
      // this.usuarioService.cadastrar(this.formulario.value).subscribe(...)
    } else {
      // Marca todos os campos como tocados para exibir erros
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  // Adicionando o método onSubmit que estava faltando
  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário enviado:', this.formulario.value);
      // Aqui você pode adicionar a lógica para enviar os dados
    } else {
      // Marca todos os campos como tocados para exibir erros
      this.formulario.markAllAsTouched();
    }
  }

  // Adicionando o método onCancel que estava faltando
  onCancel() {
    console.log('Formulário cancelado');
    this.formulario.reset();
  }

  // cancelarFormulario() {
  //   console.log('Formulário cancelado');
  //   this.formulario.reset();
  // }
}