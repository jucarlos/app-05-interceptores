import { Component } from '@angular/core';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';

  constructor( private paisesService: PaisesService ) {
    // this.paisesService.listar().subscribe( resp => {
    //   console.log(resp);
    // }, ( error => {
    //   console.log( error );
    // }))

    this.paisesService.listar().subscribe({
      next: ( resp ) => {
        console.log( resp );
      },
      error: ( error ) => {
        console.log( error );
      },
      complete: () => console.log('Completado')
    });
  }
}
