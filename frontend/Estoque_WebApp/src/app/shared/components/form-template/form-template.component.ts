import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements AfterViewInit {
  // Inputs são as formas de como o componente PAI se comunica com o componente FILHO
  // Inputs com valores padrão 
  @Input() formTitle: string = '';
  @Input() formGroup!: FormGroup;
  @Input() isSubmitting: boolean = false;
  @Input() submitText: string = 'Confirmar';
  @Input() cancelText: string = 'Cancelar';
  
  // Outputs permitem o componente Filho se comunicar com o componente PAI
  @Output() formSubmit = new EventEmitter<void>();
  @Output() formCancel = new EventEmitter<void>();
  
  // Falando pro sistema qual campo vai ser focado
  @ViewChild('firstField') firstField?: ElementRef;
  
  constructor(private location: Location) {}

  ngAfterViewInit() {
    // Focar no primeiro campo quando o componente for inicializado
    this.focusFirstField();
  }

  // Método para focar no primeiro campo
  focusFirstField() {
    if (this.firstField) {
      this.firstField.nativeElement.focus();
    }
  }

  // Método chamado ao submeter o formulário
  onSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit();
    }
  }

  // Método chamado ao cancelar
  onCancel() {
    this.formGroup.reset();
    this.location.back();
    this.formCancel.emit();
  }
}