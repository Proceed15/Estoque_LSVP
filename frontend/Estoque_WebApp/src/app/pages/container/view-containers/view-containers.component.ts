import { Component, OnDestroy, OnInit } from '@angular/core';
import { PTableComponent } from '../../../shared/components/p-table/p-table.component';
import { ContainerService } from '../../../core/services/container.service';
import { Container } from '../../../shared/models/container';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-view-containers',
  imports: [PTableComponent, CommonModule],
  standalone: true,
  templateUrl: './view-containers.component.html',
  styleUrl: './view-containers.component.css'
})
export class ViewContainersComponent implements OnInit, OnDestroy {
  containers: Container[] = []; // Array para armazenar os containers
  private routerSubscription!: Subscription; // Assinatura para monitorar eventos de navegação do roteador

  constructor(private containerService: ContainerService, private router: Router) {}

  /**
   * Método chamado quando o componente é inicializado.
   * Busca todos os containers e os armazena no array `containers`.
   */
  ngOnInit(): void {
    // Atualiza ao iniciar
    this.loadContainers();

    // Ouve eventos de navegação e recarrega se a rota atual for a deste componente
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadContainers();
      });
  }

  ngOnDestroy(): void {
    // limpar subscription para evitar memory leak
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  //Método que carrega containers
  private loadContainers(): void {
    this.containerService.getAllContainers().subscribe({
      next: (data: Container[]) => {
        this.containers = data;
      },
      error: (error) => {
        console.error('Erro ao buscar containers:', error);
      }
    });
  }

  // Método para deletar um container
  DeleteContainer(containerId: number): void {
    try {
      this.containerService.deleteContainer(containerId); // Chama o serviço para deletar o container
      this.containers = this.containers.filter(container => container.id !== containerId); // Atualiza a lista de containers removendo o container deletado
    } catch (error) {
      console.error('Erro ao deletar container:', error);
    }
  }

  // Método para redirecionar para a página de edição de container
  EditContainer(id: number): void {
    // Redireciona para a rota de edição de container
    this.router.navigate(['manage/edit/container', id]);
  }
}