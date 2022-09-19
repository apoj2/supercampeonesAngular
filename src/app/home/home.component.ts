import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  //atributos

  nombre:string = "Juan";
  edad:Number = 33;

  numeros:any[]=[5,10,20,3,0,4,0,5,0,50,0];

  //fotos:any[] =["https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/116ea658856e1a068a1f4e5ef6b1857b.jpg?alt=media&token=42298a73-1d8e-4dd8-9541-e4c2d3c6d774","https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/steve_hyuga.jpeg?alt=media&token=85742053-1c97-4b6a-9d14-7f44907bdbf1","https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/eddie_carter.jpeg?alt=media&token=fa0294eb-a5c8-4e73-94de-7faad6b05365","https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/images-19-3.jpeg?alt=media&token=44e90f57-ec36-4929-b0ad-b1e8f53f44b9"]

  personajes:Personaje[]=[
    {"nombre":"eddi", "edad":14,"fotos":"https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/eddie_carter.jpeg?alt=media&token=fa0294eb-a5c8-4e73-94de-7faad6b05365"}, 
    {"nombre":"steve", "edad":15,"fotos":"https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/steve_hyuga.jpeg?alt=media&token=85742053-1c97-4b6a-9d14-7f44907bdbf1"},
  {"nombre":"nose", "edad":18,"fotos":"https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/116ea658856e1a068a1f4e5ef6b1857b.jpg?alt=media&token=42298a73-1d8e-4dd8-9541-e4c2d3c6d774"},
  {"nombre":"nose", "edad":12,"fotos":"https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/images.jpg?alt=media&token=b640ecaa-f28f-4e5f-ba0e-ebc4fa09f5cc"},
  ];


  constructor() { }


}
