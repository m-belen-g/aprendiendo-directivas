import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuario';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas: any;

  constructor() {
    this.entradas=[
      {titulo:"Python cada dia mas presente"},
      {titulo:"Historias aterradoras"},
      {titulo:"Cuentos de animales"},
      {titulo:"Amytiville"},
      {titulo:"Terror en Chernovyl"},
    ]
  }

  usuarioRegistrado() {
    this.registrado=true;
    console.log(this.nombre);
    this.mensaje="El usuario " + this.nombre + " " + this.apellido + " se ha registrado correctamente.";
  }
}
