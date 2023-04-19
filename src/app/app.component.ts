import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  peliculas: any;
  constructor(private PeliculasService:PeliculasService){}
  ngOnInit(): void{
    this.peliculas=this.PeliculasService.retornar();
  }
 }
