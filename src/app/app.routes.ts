import { Routes } from '@angular/router';
import {AccuilleComponent} from '../app/accuille/accuille.component';
import { ServiceComponent } from './service/service.component';
import { MaisonComponent } from './maison/maison.component';
import { CantactComponent } from './cantact/cantact.component';
export const routes: Routes = [
    { path: '', component: AccuilleComponent },
    { path: 'Service', component: ServiceComponent },
    { path: 'Maison', component: MaisonComponent },
    { path: 'Cantact', component: CantactComponent }
];
