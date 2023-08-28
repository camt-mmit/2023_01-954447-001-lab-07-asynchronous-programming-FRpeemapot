import { ROUTES, Route } from "@angular/router";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

export const routes: Routes = [
    {
        path: '',
        component: ProfilePageComponent,
        children: [
            { path: '', redirectTo: 'view', pathMatch: 'full' },
            { path: 'view', component: ProfilePageComponent },
            { path: 'form'}
        ],
    },
];