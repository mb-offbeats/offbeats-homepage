import {Component, signal} from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {TranslationBaseComponent} from './utils/translation.component';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    RouterOutlet,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App extends TranslationBaseComponent {
  protected readonly title = signal('offbeats-website');
  currentYear = new Date().getFullYear();
}
