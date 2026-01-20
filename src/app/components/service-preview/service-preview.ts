import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-service-preview',
  imports: [
    AnimateOnScrollDirective
  ],
  templateUrl: './service-preview.html',
  styleUrl: './service-preview.scss',
})
export class ServicePreview extends TranslationBaseComponent {

}
