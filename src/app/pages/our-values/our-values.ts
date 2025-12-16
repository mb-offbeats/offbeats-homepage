import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-our-values',
  imports: [],
  templateUrl: './our-values.html',
  styleUrl: './our-values.scss',
})
export class OurValues implements AfterViewInit, OnDestroy {
  ls = inject(LanguageService);
  t = this.ls.text;

  private zone = inject(NgZone);
  private ctx: gsap.Context | undefined;

  constructor(private elementRef: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    // Let Angular render + browser layout settle before ScrollTrigger measures.
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        this.ctx = gsap.context(() => {
          // Fade-up
          gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 28 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  once: true,
                },
              }
            );
          });

          // Scale-in
          gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, scale: 0.92 },
              {
                opacity: 1,
                scale: 1,
                duration: 1.0,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  once: true,
                },
              }
            );
          });

          // Slide-in (staggered)
          gsap.utils.toArray<HTMLElement>('.gsap-slide-in').forEach((el, i) => {
            gsap.fromTo(
              el,
              { opacity: 0, x: 24 },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                delay: i * 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  once: true,
                },
              }
            );
          });

          // Recalculate after triggers exist (important on route navigation)
          ScrollTrigger.refresh();
        }, this.elementRef);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.ctx) this.ctx.revert();
  }
}
