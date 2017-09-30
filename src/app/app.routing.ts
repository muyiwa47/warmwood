import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ChannelComponent } from './components/channels.component';
import { ChannelDetailComponent } from './components/channel-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'channels/:id',
        component: ChannelComponent
    },
    {
        path: 'channels',
        component: ChannelDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);