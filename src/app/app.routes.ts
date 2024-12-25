import { Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: ProjectComponent},
    {path: 'home', component: HomeComponent}
];
