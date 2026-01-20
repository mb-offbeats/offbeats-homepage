import {Component, inject} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {Hero} from '../../components/hero/hero';
import {Keywords} from '../../components/keywords/keywords';
import {ServicePreview} from '../../components/service-preview/service-preview';
import {ServiceModernization} from '../../components/service-modernization/service-modernization';
import {ServiceArchitecture} from '../../components/service-architecture/service-architecture';
import {ServiceDevelopment} from '../../components/service-development/service-development';
import {ReadyToBuild} from '../../components/ready-to-build/ready-to-build';
import {Products} from '../../components/products/products';
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
    ReadyToBuild,
    Products
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: { class: 'w-full block' },
})
export class Home extends TranslationBaseComponent {
  //
  // private zone = inject(NgZone);
  // private ctx: gsap.Context | undefined;
  //
  // constructor(private elementRef: ElementRef) {
  //   gsap.registerPlugin(ScrollTrigger);
  // }
  //
  // ngAfterViewInit(): void {
  //   this.zone.runOutsideAngular(() => {
  //     setTimeout(() => {
  //       this.ctx = gsap.context(() => {
  //         this.initHeroAnimations();
  //         this.initScrollStory();
  //         this.initExpertiseScroll();
  //         this.initAboutUsReveal();
  //         this.initValuesSection();
  //         this.initCtaReveal();
  //       }, this.elementRef);
  //     }, 100);
  //   });
  // }
  //
  // /**
  //  * 1. Hero Animations
  //  * FIXED: Uses fromTo to explicitly animate TO opacity: 1.
  //  * This works with the CSS 'opacity-0' class to prevent flickering.
  //  */
  // private initHeroAnimations() {
  //   gsap.utils.toArray<HTMLElement>('.hero-section').forEach((section) => {
  //     const text = section.querySelector('.hero-text-wrapper');
  //     const fadeUps = Array.from(section.querySelectorAll<HTMLElement>('.hero-fade-up'));
  //     const content = section.querySelector('.hero-content');
  //
  //     if (!text) return;
  //
  //     // Set initial states BEFORE animating (prevents flash)
  //     gsap.set(text, { y: 100, opacity: 0 });
  //     gsap.set(fadeUps, { y: 30, opacity: 0 });
  //
  //     const tlHero = gsap.timeline();
  //     tlHero
  //       .to(text, {
  //         duration: 1.2,
  //         y: 0,
  //         opacity: 1,
  //         ease: 'power4.out',
  //       })
  //       .to(
  //         fadeUps,
  //         {
  //           duration: 0.8,
  //           y: 0,
  //           opacity: 1,
  //           stagger: 0.2,
  //           ease: 'power2.out',
  //         },
  //         '-=0.6'
  //       );
  //
  //     if (content) {
  //       gsap.to(content, {
  //         scrollTrigger: {
  //           trigger: section,
  //           start: 'top top',
  //           end: 'bottom top',
  //           scrub: 1,
  //         },
  //         y: 200,
  //         opacity: 0,
  //       });
  //     }
  //   });
  // }
  //
  // /**
  //  * 2. Scroll Story (Magic Move)
  //  * FIXED: The '=' sign now waits for the move to finish before appearing.
  //  */
  // private initScrollStory() {
  //   const heroOffbeats = document.getElementById('hero-offbeats');
  //   const storySection = document.getElementById('offbeats-story');
  //   const storyOffbeats = document.getElementById('story-offbeats');
  //   const storyEquals = document.getElementById('story-equals');
  //   const term1 = document.getElementById('story-term-1');
  //   const term2 = document.getElementById('story-term-2');
  //   const term3 = document.getElementById('story-term-3');
  //
  //   if (!heroOffbeats || !storySection || !storyOffbeats) return;
  //
  //   // A. Helper to calculate "Magic Move" positions
  //   const alignStoryToHero = () => {
  //     gsap.set(storyOffbeats, { clearProps: 'all' });
  //     const heroRect = heroOffbeats.getBoundingClientRect();
  //     const storyRect = storyOffbeats.getBoundingClientRect();
  //     const xDiff = heroRect.left + (heroRect.width / 2) - (storyRect.left + (storyRect.width / 2));
  //     const yDiff = heroRect.top + (heroRect.height / 2) - (storyRect.top + (storyRect.height / 2));
  //     const scaleFactor = parseFloat(window.getComputedStyle(heroOffbeats).fontSize) /
  //       parseFloat(window.getComputedStyle(storyOffbeats).fontSize);
  //     return { x: xDiff, y: yDiff, scale: scaleFactor };
  //   };
  //
  //   const startPos = alignStoryToHero();
  //   gsap.set(storyOffbeats, { x: startPos.x, y: startPos.y, scale: startPos.scale });
  //   gsap.set([storyEquals, term1, term2, term3], { opacity: 0, scale: 0.5 });
  //
  //   ScrollTrigger.matchMedia({
  //
  //     // --- DESKTOP (> 1024px) ---
  //     "(min-width: 1024px)": () => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: storySection,
  //           start: 'top top',
  //           end: '+=4000',
  //           scrub: 1,
  //           pin: true,
  //           anticipatePin: 1,
  //           invalidateOnRefresh: true
  //         }
  //       });
  //
  //       // Phase 1: Center
  //       tl.to(storyOffbeats, { x: 0, y: 0, scale: 1, duration: 2, ease: 'power2.inOut' }, 0);
  //       tl.to(heroOffbeats, { opacity: 0, duration: 0.5 }, 0);
  //
  //       // Phase 2: Move Left
  //       tl.to(storyOffbeats, {
  //         x: () => -window.innerWidth * 0.25,
  //         scale: 0.6,
  //         duration: 1.5,
  //         ease: 'power2.inOut'
  //       }, '+=0.5');
  //
  //       // Phase 3: Reveal Terms (FIXED: Added '>' to wait for Phase 2 to complete)
  //       // '>' means "Start at the end of the previous tween"
  //       this.addTermsAnimation(tl, storyEquals, [term1, term2, term3], '>');
  //     },
  //
  //     // --- MOBILE (< 1023px) ---
  //     "(max-width: 1023px)": () => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: storySection,
  //           start: 'top top',
  //           end: '+=3000',
  //           scrub: 1,
  //           pin: true,
  //           anticipatePin: 1,
  //           invalidateOnRefresh: true
  //         }
  //       });
  //
  //       // Phase 1: Center
  //       tl.to(storyOffbeats, { x: 0, y: 0, scale: 1, duration: 2, ease: 'power2.inOut' }, 0);
  //       tl.to(heroOffbeats, { opacity: 0, duration: 0.5 }, 0);
  //
  //       // Phase 2: Move Up
  //       tl.to(storyOffbeats, {
  //         y: () => -window.innerHeight * 0.25,
  //         scale: 0.6,
  //         duration: 1.5,
  //         ease: 'power2.inOut'
  //       }, '+=0.5');
  //
  //       // Phase 3: Reveal Terms (FIXED: Added '>' to wait for Phase 2 to complete)
  //       this.addTermsAnimation(tl, storyEquals, [term1, term2, term3], '>');
  //     }
  //   });
  // }
  //
  // // Helper with updated timing parameter
  // private addTermsAnimation(tl: gsap.core.Timeline, equals: any, terms: any[], position: string | number) {
  //   // Show Equals sign
  //   // 'position' is passed in as '>' ensuring it starts strictly after the move
  //   tl.to(equals, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, position);
  //
  //   // Cycle through terms
  //   const animateTerm = (element: any, isLast = false) => {
  //     tl.to(element, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' });
  //     if (!isLast) {
  //       tl.to(element, { opacity: 0, scale: 1.5, y: -30, duration: 0.5, ease: 'power2.in' }, '+=0.5');
  //     }
  //   };
  //
  //   animateTerm(terms[0]);
  //   animateTerm(terms[1]);
  //   animateTerm(terms[2], true);
  //
  //   tl.to({}, { duration: 1 }); // Final buffer
  // }
  //
  // // ... (Other functions initExpertiseScroll, initAboutUsReveal, etc. remain unchanged) ...
  //
  // private initExpertiseScroll() {
  //   const stepsWrap = document.getElementById('expertise-steps');
  //   if (!stepsWrap) return;
  //
  //   const steps = Array.from(stepsWrap.querySelectorAll<HTMLElement>('.expertise-step'));
  //   if (steps.length === 0) return;
  //
  //   const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  //
  //   // Put all cards in the same vertical "stage" (centered), then animate them one by one.
  //   steps.forEach((el) => {
  //     const isRight = el.classList.contains('step-right');
  //     const xFrom = () => (isMobile() ? 0 : (isRight ? 120 : -120));
  //
  //     gsap.set(el, {
  //       opacity: 0,
  //       yPercent: -50,  // anchor at vertical center (top: 50%)
  //       y: 40,
  //       x: xFrom(),
  //       rotate: isMobile() ? 0 : (isRight ? 2 : -2),
  //     });
  //   });
  //
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '#what-we-do',
  //       start: 'top top',
  //       end: `+=${Math.max(2400, steps.length * 900)}`,
  //       pin: true,
  //       scrub: 1,
  //       invalidateOnRefresh: true,
  //     },
  //   });
  //
  //   steps.forEach((el, i) => {
  //     // Bring current card in
  //     tl.to(el, { opacity: 1, y: 0, x: 0, rotate: 0, duration: 0.6, ease: 'power3.out' });
  //
  //     // Small "hold" so it reads like a step
  //     tl.to({}, { duration: 0.25 });
  //
  //     // Fade the previous card out (except for the last one)
  //     if (i < steps.length - 1) {
  //       tl.to(el, { opacity: 0, y: -60, duration: 0.5, ease: 'power2.in' });
  //     }
  //   });
  // }
  //
  //
  // private initAboutUsReveal() {
  //   gsap.to('.gsap-fade-up', {
  //     scrollTrigger: { trigger: '#about-us', start: 'top 70%' },
  //     y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power2.out',
  //   });
  //   gsap.to('.gsap-scale-in', {
  //     scrollTrigger: { trigger: '#about-us', start: 'top 70%' },
  //     scale: 1, opacity: 1, duration: 1, ease: 'power2.out',
  //   });
  //   gsap.to('.gsap-slide-in', {
  //     scrollTrigger: { trigger: '#about-us', start: 'top 70%' },
  //     x: 0, opacity: 1, duration: 1, stagger: 1, ease: 'power2.out',
  //   });
  // }
  //
  // private initValuesSection() {
  //   ScrollTrigger.matchMedia({
  //     '(min-width: 1024px)': () => {
  //       gsap.set('#val-2', { opacity: 0 });
  //       gsap.set('#val-3', { opacity: 0 });
  //       const tlValues = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: '#values-wrapper',
  //           start: 'top top',
  //           end: '+=4000',
  //           pin: true,
  //           scrub: 1,
  //         },
  //       });
  //       tlValues
  //         .to('#val-1', { x: '-110%', duration: 1 })
  //         .to('#val-2', { opacity: 1, scale: 1.1, duration: 1 }, '<')
  //         .to('#val-2', { scale: 1, duration: 1 })
  //         .fromTo('#val-3', { x: 0, opacity: 0 }, { x: '110%', opacity: 1, duration: 1 }, '<')
  //         .to({}, { duration: 1 });
  //     },
  //     '(max-width: 1023px)': () => {
  //       gsap.set('.stack-item', { opacity: 0, scale: 0.9 });
  //       gsap.set('#val-1', { opacity: 1, scale: 1 });
  //       const tlValuesMobile = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: '#values-wrapper',
  //           start: 'top top',
  //           end: '+=2500',
  //           pin: true,
  //           scrub: 1,
  //         },
  //       });
  //       tlValuesMobile
  //         .to('#val-1', { opacity: 0, scale: 0.8, duration: 1 })
  //         .to('#val-2', { opacity: 1, scale: 1, duration: 1 }, '-=0.5')
  //         .to('#val-2', { opacity: 0, scale: 0.8, duration: 1 })
  //         .to('#val-3', { opacity: 1, scale: 1, duration: 1 }, '-=0.5');
  //     },
  //   });
  // }
  //
  // private initCtaReveal() {
  //   gsap.from('.gsap-scale-up-cta', {
  //     scrollTrigger: { trigger: '.gsap-scale-up-cta', start: 'top 85%' },
  //     scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(1.7)',
  //   });
  // }
  //
  // ngOnDestroy(): void {
  //   if (this.ctx) this.ctx.revert();
  // }
}
