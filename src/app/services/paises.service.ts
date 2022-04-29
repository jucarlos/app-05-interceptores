import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  listar() {
    const url = 'https://restcountries.com/v2/all';
    // Si quiero mandar parámetros pues los puedo mandar tal cual en la url
    // lo normal es mandarlo así
    const params = new HttpParams().append('saludo', 'hola');

    // incluso mandar una cabecera
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'token': 'TOKENTOKENTOKEN'
    // });

    // para manejar el error en esta petición.
  

    // return this.http.get( url , { params, headers } )
    return this.http.get( url , { params } )
    .pipe( 
      catchError(error => {
         console.log('Hemos detectado un error');
         // antes era así: 
         // return throwError('Ha habido un error ');
         // En este sitio, se podrían guardar esos errores en algún sitio
         return throwError(() => new Error(`Error en la petición`));
       })
    );
  }
}
