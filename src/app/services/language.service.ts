import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Lang } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  // Reactive signal for current language
  currentLang = signal<Lang>('en');

  // Computed signal for the text data
  text = computed(() => TRANSLATIONS[this.currentLang()]);

  constructor() {
    this.detectLanguage();
  }

  private detectLanguage() {
    const browserLang = navigator.language.toLowerCase(); // e.g., 'de-at', 'en-us'
    if (browserLang.startsWith('de')) {
      this.currentLang.set('de');
    } else {
      this.currentLang.set('en');
    }
  }

  toggleLanguage() {
    this.currentLang.update(l => l === 'en' ? 'de' : 'en');
  }
}
