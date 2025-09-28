import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { InputMovement } from '../../shared/models/inputMovement';
import { Movement } from '../../shared/models/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  movementLink: string = '';
  constructor(private http: HttpClient) { 
    this.movementLink = environment.API_URL+"/movement"
  }


  createInputMovement(movement: InputMovement): Observable<InputMovement>{ {
    return this.http.post<any>(`${this.movementLink}/inputs`, movement);
  }

 
    // Método para pegar todos Movements
    public getAllMovements(): Observable<MovementService[]> {
      return this.http.get<MovementService[]>(this.movementLink);
    }
    //Why is That?
    //public is getting error because ts1128 
  
    // Método para pegar um Movement pelo id
    public getMovementById(MovementId: number): Observable<MovementService> {
      return this.http.get<MovementService>(`${this.movementLink}/${MovementId}`);
    }
  
    // Método para atualizar um Movement
    public updateMovement(MovementId: number, Movement: Partial<MovementService>): Observable<MovementService> {
      return this.http.put<MovementService>(`${this.movementLink}/${MovementId}`, Movement);
    }
  
    // Método para deletar um Movement
    public deleteMovement(MovementId: number): void {
      this.http.delete<MovementService>(`${this.movementLink}/${MovementId}`).subscribe(
        (response) => {
          console.log('Movement deletado com sucesso:', response);
        },
        (error) => {
          console.error('Erro ao deletar Movement:', error);
        }
      );
    }
}
