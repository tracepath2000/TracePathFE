import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { TrackerpageComponent } from './pages/trackerpage/trackerpage.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { AuthenticatedComponent } from './pages/authenticated/authenticated.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'a',
        component:AuthenticatedComponent,
        children:[
            {
                path:"trackerPage",
                component:TrackerpageComponent
            },
            {
                path:"settings",
                component:SettingsComponent
            },
            {
                path:"user-management",
                component:UserManagementComponent
            },
            {
                path:"**",
                redirectTo:"trackerPage"
            }
        ]
    }
];
