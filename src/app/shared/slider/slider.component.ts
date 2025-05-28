import { Component, Input, OnChanges, SimpleChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { Router, RouterModule } from '@angular/router';
// Optional: Consider OnPush if appropriate for your app's change detection needs
// import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],

})
export class SliderComponent implements OnChanges, OnDestroy {
  @Input() images: { src: string, caption: string, houseKey: string }[] = [];
  @ViewChild('splideContainer') splideContainerRef!: ElementRef<HTMLElement>;
  
  private splideInstance: Splide | null = null;

  constructor(private router: Router) {}

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
          perPage: 5,
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          lazyLoad: 'nearby',
          arrows: true,
          pagination: false,
          breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          480: {
            perPage: 1,
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
  
    goToOffer(houseKey: string) {
      this.router.navigate(['/oferta'], { queryParams: { house: houseKey } });
      console.log(houseKey)
  }
}