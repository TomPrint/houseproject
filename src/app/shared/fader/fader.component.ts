import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-fader',
  standalone: true,
  imports: [],
  templateUrl: './fader.component.html',
  styleUrl: './fader.component.css'
})
export class FaderComponent implements AfterViewInit {
  @ViewChild('splide') splideElem!: ElementRef;

  ngAfterViewInit() {
    const root = this.splideElem.nativeElement as HTMLElement;
    const imgs = Array.from(root.querySelectorAll<HTMLImageElement>('img'));

    // 1) Preload all images OFF-DOM (works regardless of visibility)
    Promise.all(imgs.map(img => this.preload(img.src)))
      .catch(() => {}) // don’t block on errors
      .then(() => {
        // 2) Start the carousel only after everything is ready
        new Splide(this.splideElem.nativeElement, {
          type: 'fade',
          rewind: true,
          autoplay: true,
          interval: 6000,
          pauseOnHover: false,
          pauseOnFocus: false,
          speed: 3000,
          arrows: false,
          pagination: false,
          waitForTransition: true,
        }).mount();
      });
  }

  private preload(src: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        // ensure decode (when supported) for instant paint
        if ('decode' in img) {
          (img as any).decode().catch(() => {}).finally(() => resolve());
        } else {
          resolve();
        }
      };
      img.onerror = () => resolve(); // resolve on error to avoid hanging
      img.src = src;
    });
  }
}
