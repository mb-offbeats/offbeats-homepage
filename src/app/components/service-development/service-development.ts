import { Component } from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-service-development',
  imports: [
    RouterLink
  ],
  templateUrl: './service-development.html',
  styleUrl: './service-development.scss',
})
export class ServiceDevelopment extends TranslationBaseComponent {

}
