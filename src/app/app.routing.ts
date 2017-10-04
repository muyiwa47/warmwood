import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ChannelComponent } from './components/channels.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'channels/:id',
        component: ChannelComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);