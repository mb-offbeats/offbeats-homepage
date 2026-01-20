import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {RouterLink} from '@angular/router';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-service-development',
  imports: [
    RouterLink,
    AnimateOnScrollDirective
  ],
  templateUrl: './service-development.html',
  styleUrl: './service-development.scss',
})
export class ServiceDevelopment extends TranslationBaseComponent {

}
