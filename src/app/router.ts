import { Routes } from '@angular/router';
import { NotFoundComponent } from './core';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  /*{
    path: 'globais',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLGlb,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },
  {
    path: 'educacional',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLEdu,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },*/
  { path: '', pathMatch: 'full', redirectTo: 'vacations' },
  {
    path: 'vacations',
    loadChildren: () =>
      import('./vacations/vacations.module').then(m => m.VacationsModule)
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];
