import {Component, inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {TranslationBaseComponent} from '../../utils/translation.component';

@Component({
  selector: 'app-keywords',
  imports: [],
  templateUrl: './keywords.html',
  styleUrl: './keywords.scss',
})
export class Keywords extends TranslationBaseComponent {}
