import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo1';
  show:boolean = true;
  show2:boolean = false;
  fondo = '';
  activo = 'primero';

  cursos:string[] = ['CSS', 'ANGULAR', 'COBOL', 'PHP', 'PASCAL','HTML', 'JAVASCRIPT'];
  animales:Array<any> = [
    {tipo:'Perro', nombre:'chuy', edad:2},
    {tipo:'Gato', nombre:'toby', edad:1},
    {tipo:'Perro', nombre:'max', edad:3},
    {tipo:'Gato', nombre:'theo', edad:1},
    {tipo:'Gato', nombre:'jugo', edad:4},
    {tipo:'Perro', nombre:'tango', edad:7},
  ];
  contador_pos:number=0;
  contador_neg:number=0;
}
