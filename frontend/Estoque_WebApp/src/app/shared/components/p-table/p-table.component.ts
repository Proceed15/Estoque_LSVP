import { ChangeDetectionStrategy,SimpleChanges, Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { IconModule, icons } from '../../modules/icon/icon.module';
import { ModalModule } from '../../modules/modal/modal.module';
import { EmptyComponentComponent } from '../empty-component/empty-component.component';
@Component({
  selector: 'app-p-table',
  imports: [CommonModule, IconModule, ModalModule, EmptyComponentComponent],
  standalone: true, 
  templateUrl: './p-table.component.html',
  styleUrl: './p-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PTableComponent<T>  implements OnInit, OnChanges {
  icons = icons //Importa os ícones do módulo de ícones
  @Input() title: string = ''; //Título da Tabela
  
 /*Estrutura de Uma Tabela Utilizando any*/
  @Input() data: any[] = []; //Array da tabela de tipo any
  @Input() showSearch: boolean = false; //Habilitar Pesquisa
  @Input() edit:boolean = false; //Habilitar Edição
  @Input() delete:boolean = false; //Habilitar Deleção
  @Input() view:boolean = false; //Habilitar Visualização
  @Output() onEdit = new EventEmitter<T>();//Evento de Edição
  @Output() onDelete = new EventEmitter<T>();//Evento de Exclusão
  @Output() onView = new EventEmitter<T>();//Evento de Visualização

  columns: string[] = []; //Definir Colunas  
  initialData: any[] = []; //Armazena os dados iniciais para pesquisa


  constructor(private icon: IconModule) { }

  //Inicializa o componente e define as colunas da tabela
  ngOnInit(): void {
    this.initialData = [...this.data]; // Salva os dados originais
    this.updateColumns();
  }

  //Detecta mudanças nas propriedades de entrada
  ngOnChanges(changes: SimpleChanges): void {
  if (changes['data'] && changes['data'].currentValue) {
    this.initialData = [...changes['data'].currentValue]; // Armazena os dados iniciais para pesquisa
    this.updateColumns();
  }
}

  //Método para editar um item
  private updateColumns(): void {
    if (this.data.length > 0) {
      this.columns = Object.keys(this.data[0]);
    } else {
      this.columns = [];
    }
  }
 
  //Método de pesquisa
onSearch(event: Event): void {
  const input = event.target as HTMLInputElement;
  const searchTerm = input.value.toLowerCase();

  if (searchTerm === '') {
    this.data = [...this.initialData]; // Restaurar todos os dados
    return;
  }

  this.data = this.initialData.filter(item =>
    Object.values(item).some(value =>
      value?.toString().toLowerCase().includes(searchTerm)
    )
  );
}
}
