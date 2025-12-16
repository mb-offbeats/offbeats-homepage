import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterLink
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  ls = inject(LanguageService);
  t = this.ls.text;
}
