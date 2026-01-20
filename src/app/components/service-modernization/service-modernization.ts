import {Component} from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-service-modernization',
  imports: [
    RouterLink
  ],
  templateUrl: './service-modernization.html',
  styleUrl: './service-modernization.scss',
})
export class ServiceModernization extends TranslationBaseComponent {

}
