import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

const URLGlb = 'https://victorious-ocean-048ecee10.1.azurestaticapps.net/795.c295044528dde4f3.js';
const URLEdu = 'http://localhost:1000/remoteEntry.js'; 

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'globais',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLGlb,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  }/*,
  {
    path: 'educacional',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLEdu,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },*/
  
];
