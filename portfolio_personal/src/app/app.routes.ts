import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: "proyectos",
        component: ProyectosComponent
    },
    {
        path: "informacion",
        component: InformacionComponent
    }
];