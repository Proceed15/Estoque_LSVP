import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormTemplateComponent],
  template: `
    <app-form-template
      formTitle="Cadastro de Usuário"
      [formGroup]="formulario"
      submitText="Salvar"
      cancelText="Cancelar"
      (formSubmit)="enviarFormulario()"
      (formCancel)="cancelarFormulario()">
      
      <!-- Campos do formulário -->
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome" formControlName="nome" #firstField class="form-control">
      </div>
      
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" formControlName="email" class="form-control">
      </div>
      
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" id="senha" formControlName="senha" class="form-control">
      </div>
      
      <div class="form-group">
        <label for="confirmarSenha">Confirmar Senha</label>
        <input type="password" id="confirmarSenha" formControlName="confirmarSenha" class="form-control">
      </div>
      
    </app-form-template>
  `,
  styles: [`form-component.css`]
})
export class CadastroUsuarioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { 
      validators: this.validarSenhasIguais 
    });
  }

  validarSenhasIguais(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    
    if (senha !== confirmarSenha) {
      formGroup.get('confirmarSenha')?.setErrors({ senhasDiferentes: true });
    } else {
      formGroup.get('confirmarSenha')?.setErrors(null);
    }
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

  cancelarFormulario() {
    console.log('Formulário cancelado');
    this.formulario.reset();
  }
}