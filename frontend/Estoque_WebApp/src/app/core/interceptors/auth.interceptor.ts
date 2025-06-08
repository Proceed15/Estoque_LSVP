import { HttpInterceptorFn } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //injeta o serviço de autenticação
  const authService = inject(AuthenticationService);
  //obtem o token de autenticação
  const token = authService.getToken();

  //verifica se o token existe e adiciona ao header da requisição
  if(token){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`// adiciona o token ao header Authorization
      }
    });
  }
  return next(req);// prossegue com a requisição
      
 
  
}