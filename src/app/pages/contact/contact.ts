import {Component, inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  ls = inject(LanguageService);
  t = this.ls.text;
}
