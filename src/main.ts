import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

Promise.all([
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'https://victorious-ocean-048ecee10.1.azurestaticapps.net',
  })/*,
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:1000/remoteEntry.js',
  }),*/
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
