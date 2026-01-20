import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {TranslationBaseComponent} from '../../utils/translation.component';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  host: {'class': 'w-full'}
})
export class NotFound extends TranslationBaseComponent {}
