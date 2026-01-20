import {Component, inject, signal} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  ls = inject(LanguageService);
  router = inject(Router);

  // Helper to access the computed signal value in template cleaner
  t = this.ls.text;

  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
