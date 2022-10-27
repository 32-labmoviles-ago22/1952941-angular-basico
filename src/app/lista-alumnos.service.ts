import { Injectable } from '@angular/core';
import { Alumno } from 'src/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  constructor() { }

  alumnos: Alumno[] = [
    {
      nombre: "Edgar Efren",
      presente: true
    },
    {
      nombre: "Isaac Zuñiga",
      presente: true
    },
    {
      nombre: "Orlando Castillo",
      presente: true
    },
    {
      nombre: "Jose David",
      presente: false
    },
    {
      nombre: "Jesus Gerardo",
      presente: false
    },
    {
      nombre: "Raúl Eduardo",
      presente: true
    },
    {
      nombre: "Cesar Alexandro",
      presente: false
    },
    {
      nombre: "Andrés Hernandez",
      presente: false
    },
    {
      nombre: "Antonio Medina",
      presente: true
    },
    {
      nombre: "Mauricio Nicolas",
      presente: false
    },
    {
      nombre: "Fidel Ortiz",
      presente: true
    },
    {
      nombre: "Manuel Rico Luna",
      presente: true
    },
    {
      nombre: "Jonathan David",
      presente: false
    },
    {
      nombre: "Felipe Daniel",
      presente: false
    },
    {
      nombre: "Luis Antonio Rocha",
      presente: true
    },
    {
      nombre: "Luis Fernando Camaal",
      presente: true
    }]

    agregarAlumno(nuevoAlumno: Alumno){
      this.alumnos.push(nuevoAlumno);
    }

    buscaAlumno(alumnoNombre: string){
      let alumno;
      for(let i=0; i<this.alumnos.length; i++){
        if(this.alumnos[i].nombre==alumnoNombre){
          alumno=this.alumnos[i];
        }
          
      }
      return alumno;
    }
}



  