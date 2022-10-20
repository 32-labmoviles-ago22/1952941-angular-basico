import { Component, OnInit } from '@angular/core';
import{AlertController, ActionSheetController} from '@ionic/angular'
import { Alumno } from 'src/alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private alertaController: AlertController, private actionSheetController: ActionSheetController) { }

  ngOnInit(): void {
  }

onSubmit(){
  console.log("se submitio el forms");
}

//promesas en angular
//async: retorna un objeto, en este caso un alert
  async mensajeAlerta(tipoMensaje: string){
    const alerta=this.alertaController.create(
      {
        header: 'hola',
        subHeader: 'este es un mensaje de alerta del tipo '+ tipoMensaje,
        message: 'haz click en el boton para salir',
        buttons: ['aceptar']
      }
    );
    (await alerta).present();
  }

  async abrirActionSheet(){
    const ActionSheet= await this.actionSheetController.create(
      {
        header: 'selecciona una opcion',
        buttons: [
          {
            text: 'borrar',
            role: 'destructive',
            data: {
              action: 'delete'
            }
          },
          {
            text: 'compartir',
            data: {
              action: 'compartir'
            }
          },
          {
            text: 'cancelar',
            data: {
              action: 'cancelar'
            }
          }
        ]
      }
    );
    ActionSheet.present();
  }

 

  nuevoAlumno: Alumno={
    nombre: '',
    presente: false
  }

  agregarAlumno(){
    console.log("Se submitio formulario");
    //agregrab alumno 
    this.alumnos.push(this.nuevoAlumno);
    }

    
  

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
    }
  ]

}
