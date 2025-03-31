import { Component, Input, OnChanges, SimpleChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
// Optional: Consider OnPush if appropriate for your app's change detection needs
// import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

})
export class SliderComponent implements OnChanges, OnDestroy {
  @Input() images: string[] = [];
  @ViewChild('splideContainer') splideContainerRef!: ElementRef<HTMLElement>;

  private splideInstance: Splide | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images']) {
      this.reinitializeSlider();
    }
  }

  private reinitializeSlider(): void {
    this.splideInstance?.destroy(true); 
    this.splideInstance = null;

    setTimeout(() => {
      const container = this.splideContainerRef?.nativeElement;
      if (!container || !this.images || this.images.length === 0) {
        return;
      }

      try {
        this.splideInstance = new Splide(container, {
          // --- Splide Options ---
          type: 'loop',
          perPage: 1,
          focus: 'center',
          gap: '1rem',
          padding: '20%',
          speed: 1800,
          lazyLoad: 'nearby',
          breakpoints: {
            768: {}, 
            480: {
              padding: '10%',
              height: 350, 
            },
          },
        }).mount();
      } catch (error) {
        console.error("SliderComponent: Error initializing Splide:", error);
        this.splideInstance = null; 
      }
    }, 0); 
  }

  ngOnDestroy(): void {

    this.splideInstance?.destroy(true);
  }
}