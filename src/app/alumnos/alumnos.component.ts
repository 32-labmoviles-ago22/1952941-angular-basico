import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alumnos: any = [
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
    }
  ]

}
