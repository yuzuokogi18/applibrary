import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LibroComponent } from '../libro/libro.component';
import { LoginComponent } from '../login/login.component';
import { AdminiComponent } from '../admini/admini.component';
import { AgregarComponent } from '../agregar/agregar.component';
import { EditarComponent } from '../editar/editar.component';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { ComenzaraleerComponent } from '../comenzaraleer/comenzaraleer.component';
import { FantasiaComponent } from '../fantasia/fantasia.component';
import { VisualizarlibrosComponent } from '../visualizarlibros/visualizarlibros.component';
import { HombresloboComponent } from '../hombreslobo/hombreslobo.component';
import { ParanormalComponent } from '../paranormal/paranormal.component';
import { NoficcionComponent } from '../noficcion/noficcion.component';
import { RegisterComponent } from '../register/register.component';
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'libro/:id', component: LibroComponent},
    {path:'login',component:LoginComponent},
    { path: 'admin', component: AdminiComponent },  
    { path: 'agregar', component: AgregarComponent },
    { path: 'editar/:id', component: EditarComponent },
    { path: 'eliminar/id', component: EliminarComponent },
    { path: 'comenzar-a-leer/:id', component: ComenzaraleerComponent },
    {path:'fantasia',component:FantasiaComponent},
    {path:'visualizarlibros',component:VisualizarlibrosComponent},
    {path:'hombreslobo',component:HombresloboComponent},
    {path:'paranormal',component:ParanormalComponent},
    {path:'noficcion',component:NoficcionComponent},
    {path:'register',component:RegisterComponent}
];