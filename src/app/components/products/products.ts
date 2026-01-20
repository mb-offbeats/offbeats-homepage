import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {AnimateOnScrollDirective} from '../../utils/animate-on-scroll.directive';

@Component({
  selector: 'app-products',
  imports: [
    AnimateOnScrollDirective
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products extends TranslationBaseComponent {

}
