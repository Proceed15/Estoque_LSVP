import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from '../authentication/authentication.service';
import { inject } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //injeta o serviço de autenticação
  const authService = inject(AuthenticationService);
  //obtem o token de autenticação
  const token = authService.getToken();

  //verifica se o token existe e adiciona ao header da requisição
  if(token){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
      
 
  
}