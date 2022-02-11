import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

const URLGlb = 'https://victorious-ocean-048ecee10.1.azurestaticapps.net/main.7f38fad2660833b1.js';
const URLEdu = 'https://victorious-ocean-048ecee10.1.azurestaticapps.net/main.7f38fad2660833b1.js';

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
