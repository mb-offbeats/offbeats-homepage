import {Component, inject} from '@angular/core';
import {Scrolling} from '../../utils/scrolling';
import {TranslationBaseComponent} from '../../utils/translation.component';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero extends TranslationBaseComponent {
  scroller = inject(Scrolling);
}
