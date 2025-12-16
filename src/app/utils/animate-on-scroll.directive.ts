// animate-on-scroll.directive.ts
import {Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy, Input, input} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true // If you are using standalone components
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  animationDelay = input<string>('0ms'); // Allow staggering animations

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // 1. Initially hide the element and set transition setup
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.6s ease-out, transform 0.6s ease-out');
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 2. Add delay if provided
          setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          }, parseInt(this.animationDelay()));

          // Stop observing once animated (so it doesn't hide again when scrolling up)
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
