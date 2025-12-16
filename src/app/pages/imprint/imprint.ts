import {Component, inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-imprint',
  imports: [],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  ls = inject(LanguageService);
  t = this.ls.text;
}
