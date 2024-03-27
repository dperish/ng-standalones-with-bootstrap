import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

/**
 * Eager load the HomeComponent and lazy load the AboutComponent and ContactComponent.
 */
export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about', loadComponent: () => import('./features/about/about.component')
                        .then(x => x.AboutComponent), title: 'About' },
    { path: 'contact', loadComponent: () => import('./features/contact/contact.component')
                        .then(x => x.ContactComponent), title: 'Contact' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
