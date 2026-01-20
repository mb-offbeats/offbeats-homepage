import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {NotFound} from './pages/not-found/not-found';
import {PrivacyPolicy} from './pages/privacy-policy/privacy-policy';
import {Imprint} from './pages/imprint/imprint';
import {Contact} from './pages/contact/contact';
import {AboutUs} from './pages/about-us/about-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact},
  { path: 'about', component: AboutUs},
  { path: 'imprint', component: Imprint},
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: '**', component: NotFound },  // Wildcard route for a 404 page
];
