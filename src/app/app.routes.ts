import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'dynamic-section', pathMatch: 'full'},
    {
        path: 'dynamic-section',
        loadChildren: () =>
        import('./dynamic-section/dynamic-section.routes').then((m) => m.routes),    
    
    },
];
