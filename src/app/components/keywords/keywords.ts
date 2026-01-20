import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-keywords',
  imports: [
    AnimateOnScrollDirective
  ],
  templateUrl: './keywords.html',
  styleUrl: './keywords.scss',
})
export class Keywords extends TranslationBaseComponent {}
