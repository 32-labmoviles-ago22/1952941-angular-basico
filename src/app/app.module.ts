
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { IonicModule, IonTabs } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { MateriasComponent } from './materias/materias.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlumnosComponent,
    TabsComponent,
    MateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
