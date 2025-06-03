import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from '../authentication/authentication.service';
import { inject } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


let refresh = false; // Variável fora da função

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);
  const http = inject(HttpClient);
  const accessToken = authService.getToken();

  let modifiedReq = req;
  if (accessToken) {
    modifiedReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${accessToken}`
      }
    });
  }

  return next(modifiedReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401 && !refresh) {
        refresh = true;
        return http.post<any>(environment.API_URL+'/auth/refresh', {}, { withCredentials: true }).pipe(
          switchMap((res: any) => {
            authService.setToken(res.token);
            const newReq = req.clone({
              setHeaders: {
                authorization: `Bearer ${res.token}`
              }
            });
            refresh = false;
            return next(newReq);
          }),
          catchError(refreshErr => {
            refresh = false;
            return throwError(() => refreshErr);
          })
        );
      }
      refresh = false;
      return throwError(() => err);
    })
  );
}