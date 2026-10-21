import { Routes } from '@angular/router';
import { Home } from './home/home';
import { loadRemoteModule } from '@angular-architects/module-federation';  

export const routes: Routes = [
    {
        path: 'produtos',
        loadComponent: () => loadRemoteModule({
            type: 'script',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'produtos',
            exposedModule: './Component'
        }).then( m => m.App )
    },
    {
        path: 'grafico',
        loadComponent: () => loadRemoteModule({
            type: 'script',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'grafico',
            exposedModule: './Component'
        }).then( m => m.App )
    },
    { path: 'home', component: Home },
    { path: '', redirectTo:'/home', pathMatch: 'full' }
];