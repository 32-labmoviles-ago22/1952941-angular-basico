import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  materias: any = [
    'Aplicaciones Moviles',
    'Lab Aplicaciones',
    'Ecuaciones Diferenciales'
  ]

}
