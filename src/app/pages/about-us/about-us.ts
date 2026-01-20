import {Component, inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {TranslationBaseComponent} from '../../utils/translation.component';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
  host: {'class': 'w-full'}
})
export class AboutUs extends TranslationBaseComponent {}
