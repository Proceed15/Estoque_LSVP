import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { throwError } from 'rxjs'; 
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //define a URL para o endpoint de login
   private url: string = environment.API_URL+"/auth/login"
   

  constructor(private router: Router, private http: HttpClient) { }

  //função para setar o token no localStorage
  setToken(token:string): void{
    localStorage.setItem('accessToken', token); //seta a token com a chave de acesso
  }

  //função para obter o token do localStorage
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  //ve se o usuário está autenticado
  isAuthenticated(): boolean {
  const token = this.getToken();
  return !!token && token.trim() !== '';//verifica se o token existe e não está vazio
}
  //funcao login
   login(form: FormGroup): void {
    this.http.post(this.url, form.value, { withCredentials: true })
      .subscribe((res: any) => {
        try{
        this.setToken(res.token);
        this.router.navigate(['/']);//navega para a tela principal após o login
        }catch (error) {
          console.error('Erro ao processar o token:', error);
          throwError(() => new Error('Erro ao processar o token'));
        }
      });
  }
  
  //função para logout
  logout(): void{
    localStorage.removeItem('accessToken');  // remove item do storage da navegação
    this.router.navigate(['/login']);
    this.http.post(environment.API_URL+'/auth/logout', {}, {withCredentials: true})
    .subscribe(() =>{
      this.router.navigate(['/login']); // navega para a tela de login

    })
  }

}

