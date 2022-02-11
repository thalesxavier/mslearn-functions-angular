import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

Promise.all([
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'https://victorious-ocean-048ecee10.1.azurestaticapps.net/main.7f38fad2660833b1.js',
  }),
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'https://victorious-ocean-048ecee10.1.azurestaticapps.net/main.7f38fad2660833b1.js',
  }),
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
