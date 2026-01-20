import {Component} from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {Keywords} from '../../components/keywords/keywords';
import {ServicePreview} from '../../components/service-preview/service-preview';
import {ServiceModernization} from '../../components/service-modernization/service-modernization';
import {ServiceArchitecture} from '../../components/service-architecture/service-architecture';
import {ServiceDevelopment} from '../../components/service-development/service-development';
import {ReadyToBuild} from '../../components/ready-to-build/ready-to-build';
import {TranslationBaseComponent} from '../../utils/translation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Keywords,
    ServicePreview,
    ServiceModernization,
    ServiceArchitecture,
    ServiceDevelopment,
    ReadyToBuild
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: { class: 'w-full block' },
})
export class Home extends TranslationBaseComponent {
}
