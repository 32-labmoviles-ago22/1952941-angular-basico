
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { IonicModule, IonTabs } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { MateriasComponent } from './materias/materias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlumnosComponent,
    TabsComponent,
    MateriasComponent,
    AlumnoDetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
