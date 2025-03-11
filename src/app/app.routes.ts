import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'youtube-downloader',
        pathMatch: 'full'
    },
    {
        path: 'youtube-downloader',
        loadComponent: () => import('./components/youtube-downloader/youtube-downloader.component').then(m => m.YoutubeDownloaderComponent)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
