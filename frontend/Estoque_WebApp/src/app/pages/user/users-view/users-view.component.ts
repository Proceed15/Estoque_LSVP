import { Component, OnInit } from '@angular/core';
import { PTableComponent } from '../../../shared/components/p-table/p-table.component';
import { UserService } from './../../../core/services/user.service';
import { User } from './../../../shared/models/user';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './../../../core/authentication/authentication.service';

@Component({
  selector: 'app-users-view',
  imports: [PTableComponent, CommonModule],
 standalone: true,
templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent implements OnInit {
  users: User[] = []; // Array para armazenar os usuários

  constructor(private userService :UserService, private auth: AuthenticationService) {}

  /**
   * Método chamado quando o componente é inicializado.
   * Busca todos os usuários e os armazena no array `users`.
   */
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: any) => {
        console.log('Dados recebidos:', data); 
        this.users = data;
      },
      error: (error: any) => {
        console.error('Erro ao buscar usuários:', error);
      }
    });
  }
  /**
    Método para obter o token de autenticação do usuário.
   retorna O token de autenticação ou null se não estiver autenticado.
   */
  public getToken(): string | null {
    return this.auth.getToken();
  }
  
  //Método para editar um usuário
  EditUser(userId: number): void {
    console.log('Editar usuário com ID:', userId);
    // Implementar lógica de edição de usuário
  }

  // Método para deletar um usuário
  DeleteUser(userId: number): void {
   try {
    this.userService.deleteUser(userId); // Chama o serviço para deletar o usuário
    this.users = this.users.filter(user => user.id !== userId); // Atualiza a lista de usuários removendo o usuário deletado
   }catch (error) {
    console.error('Erro ao deletar usuário:', error);
   }
  }
}