import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddtokenService implements HttpInterceptor{

  constructor() { }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   throw new Error('Method not implemented.');
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    // La req es lo que solicita el usuario.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'TOKENTOKENTOKENENINTERCEPTOR'
    });

    // la req solo se puede usar una vez. Hay que clonarla.
    const cloneReq = req.clone({
      headers
    });


    console.log('Pasando por el interceptor');
    // Dejar pasar todo. si solamente pongo esto
    return next.handle( cloneReq )
    .pipe(
      catchError ( err => this.registrarError( err) )
    );
  }

  registrarError( error: HttpErrorResponse ){
    console.log( 'Registrando el error ', error.message);
    return throwError(() => new Error(`Error en la petición`));
  }
}
