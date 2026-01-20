import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {RouterLink} from '@angular/router';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-service-architecture',
  imports: [
    RouterLink,
    AnimateOnScrollDirective
  ],
  templateUrl: './service-architecture.html',
  styleUrl: './service-architecture.scss',
})
export class ServiceArchitecture extends TranslationBaseComponent{

}
