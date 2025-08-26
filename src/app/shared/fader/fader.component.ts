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
  if (!imgs.length) return;

  const load = (src: string) =>
    new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        if ('decode' in img) (img as any).decode().catch(() => {}).finally(resolve);
        else resolve();
      };
      img.onerror = () => resolve();
      img.src = src;
    });

  const firstSrc = imgs[0].src;
  const secondSrc = imgs[1]?.src;

  // 1) Ensure the first image is ready
  load(firstSrc).then(() => {
    const splide = new Splide(this.splideElem.nativeElement, {
      type: 'fade',
      rewind: true,
      autoplay: false,           // start paused; we’ll turn it on once slide #2 is ready
      interval: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1200,               // faster fade feels snappier
      arrows: false,
      pagination: false,
      waitForTransition: true,
    }).mount();

    // 2) Preload the next few slides in the background
    const rest = imgs.slice(1).map((i) => i.src);
    Promise.all(rest.slice(0, 3).map(load))     // warm 2–3 neighbors first
      .catch(() => {})
      .then(() => {
        // 3) Once the second is warm, kick off autoplay
        if (secondSrc) {
          load(secondSrc).then(() => splide.Components.Autoplay.play());
        } else {
          splide.Components.Autoplay.play();
        }
        // keep warming the rest without blocking UI
        rest.slice(3).forEach((src) => load(src));
      });
  });
}
}
