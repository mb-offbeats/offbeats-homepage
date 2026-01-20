import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {RouterLink} from '@angular/router';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-service-modernization',
  imports: [
    RouterLink,
    AnimateOnScrollDirective
  ],
  templateUrl: './service-modernization.html',
  styleUrl: './service-modernization.scss',
})
export class ServiceModernization extends TranslationBaseComponent {

}
