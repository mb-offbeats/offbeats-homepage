import { Component } from '@angular/core';
import {TranslationBaseComponent} from '../../utils/translation.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-service-architecture',
  imports: [
    RouterLink
  ],
  templateUrl: './service-architecture.html',
  styleUrl: './service-architecture.scss',
})
export class ServiceArchitecture extends TranslationBaseComponent{

}
