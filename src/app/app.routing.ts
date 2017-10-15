import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ChannelComponent } from './components/channels.component';
import { FavoriteComponent} from './components/favorites.component';

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
        path: 'favorite',
        component: FavoriteComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);