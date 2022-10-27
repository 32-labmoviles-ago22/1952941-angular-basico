import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaAlumnosService } from '../lista-alumnos.service';
import { Alumno } from 'src/alumno.model';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private listaAlumnos: ListaAlumnosService) { }

  ngOnInit(): void {
    console.log(this.alumnoEncontrado);
  }

  alumno: string=this.ruta.snapshot.params['nombre'];

  alumnoEncontrado:any=this.listaAlumnos.buscaAlumno(this.alumno);

}
