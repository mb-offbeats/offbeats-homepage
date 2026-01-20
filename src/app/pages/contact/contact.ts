import {Component, inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {TranslationBaseComponent} from '../../utils/translation.component';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  host: {'class': 'w-full'}
})
export class Contact extends TranslationBaseComponent {}
