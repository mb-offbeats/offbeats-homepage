import {Component, inject, signal} from '@angular/core';
import {LanguageService} from './services/language.service';
import {Navbar} from './components/navbar/navbar';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('offbeats-website');

  ls = inject(LanguageService);

  // Helper to access the computed signal value in template cleaner
  t = this.ls.text;

  currentYear = new Date().getFullYear();
}
