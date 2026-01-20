import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-ready-to-build',
  imports: [
    AnimateOnScrollDirective
  ],
  templateUrl: './ready-to-build.html',
  styleUrl: './ready-to-build.scss',
})
export class ReadyToBuild extends TranslationBaseComponent {

}
