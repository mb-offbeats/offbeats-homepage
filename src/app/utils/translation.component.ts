import {inject} from '@angular/core';
import {LanguageService} from '../services/language.service';

export class TranslationBaseComponent {
  ls = inject(LanguageService);
  t = this.ls.text;
}
