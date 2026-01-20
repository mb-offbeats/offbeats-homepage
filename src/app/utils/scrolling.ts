import {inject, Injectable} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Scrolling {
  viewportScroller = inject(ViewportScroller)

  scrollTo(anchorId: string): void {
    console.log('scrollTo', anchorId);
    if (anchorId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Offset für den fixierten Header (ca. 100px)
      this.viewportScroller.setOffset([0, 100]);
      this.viewportScroller.scrollToAnchor(anchorId, {behavior: 'smooth' });
    }
  }
}
