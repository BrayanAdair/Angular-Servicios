import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }
  retornar (){
    return[
      {
        codigo:1,
        descripcion:"jurrassic",
        director:"steven spielberg"
      },
      {
        codigo:2,
        descripcion:"pinocho",
        director:"guillermo del toro"
      },
      {
        codigo:3,
        descripcion:"Avatar",
        director:"James Cameron"
      }
    ]
  }
}
