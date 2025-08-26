import {
  Component,
  computed,
  signal,
  AfterViewInit,
  ViewChild,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BrownComponent } from '../../shared/brown/brown.component';
import { houses } from './houses';
import Splide from '@splidejs/splide';
import { ActivatedRoute } from '@angular/router';
import { ImagePreloadingService } from '../../services/image-preloading.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [NavbarComponent, CommonModule, BrownComponent],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements AfterViewInit, OnInit {
  houses = houses;
  route = inject(ActivatedRoute);
  imagePreloadingService = inject(ImagePreloadingService);

  selectedHouse = signal<keyof typeof houses>('CALMA');
  selectedImage = signal<string>('');
  isZoomedModal = signal(false);

  currentDrawingIndex = signal(0);
  currentRenderIndex = signal(0);
  selectedInterior = signal<string>('');
  currentInteriorIndex = signal(0);
  currentExteriorIndex = signal(0);
  selectedExterior = signal<string>('');

  @ViewChild('houseCarousel') houseCarousel!: ElementRef;

  houseList = computed(() =>
    Object.entries(this.houses).map(([key, house]) => ({
      key,
      ...house,
    }))
  );

  ngOnInit(): void {
    // Handle query param (house=...)
    this.route.queryParamMap.subscribe(async (params) => {
      const houseParam = params.get('house');

      // If the URL specifies a house, switch to it (with hero decode first)
      if (houseParam) {
        const foundHouseKey = Object.keys(this.houses).find(
          (key) => key.toLowerCase() === houseParam.toLowerCase()
        ) as keyof typeof houses | undefined;

        if (foundHouseKey) {
          await this.toggleHouse(foundHouseKey);
          return;
        }
      }

      // Otherwise, ensure initial house heroes are warm (front/back) and
      // start preloading the rest in the background.
      const initialKey = this.selectedHouse();
      const h = this.houses[initialKey];
      await this.imagePreloadingService.preloadAndDecode([
        h.imagefront,
        h.imageback,
      ]);
      this.preloadRest(initialKey);

      // Ensure exterior selection for initial house
      const newExteriors = this.houses[initialKey]?.exteriors;
      this.selectedExterior.set(newExteriors?.[0]?.name ?? '');
    });
  }

  /**
   * Preload the non-hero images for a given house in the background.
   */
  private preloadRest(houseKey: keyof typeof houses): void {
    const house = this.houses[houseKey];
    const restUrls = [
      house.drawing,
      ...house.renders,
      ...house.interiors.map((i) => i.image),
      ...house.exteriors.map((e) => e.image),
      ...house.images,
    ].filter(Boolean);
    // Fire and forget
    this.imagePreloadingService.preload(restUrls);
  }

  /**
   * Switch to a different house:
   * 1) Preload + decode front/back heroes so they paint instantly.
   * 2) Preload the rest in the background.
   * 3) Update UI state.
   */
  async toggleHouse(house: string | keyof typeof houses) {
    const key = house as keyof typeof houses;
    const h = this.houses[key];

    // Make sure the two visible images are fully decoded before the swap
    await this.imagePreloadingService.preloadAndDecode([
      h.imagefront,
      h.imageback,
    ]);

    // Start background preloading for everything else
    this.preloadRest(key);

    // Now update state (UI swaps only once images are ready to paint)
    this.selectedHouse.set(key);
    this.currentDrawingIndex.set(0);
    this.selectedInterior.set('');
    this.selectedExterior.set('');
    this.currentInteriorIndex.set(0);
    this.currentExteriorIndex.set(0);

    const newExteriors = this.houses[this.selectedHouse()]?.exteriors;
    if (newExteriors && newExteriors.length > 0) {
      this.selectedExterior.set(newExteriors[0].name);
    } else {
      this.selectedExterior.set('');
    }
  }

  currentHouseExteriors = computed(() => {
    const currentHouseKey = this.selectedHouse();
    return this.houses[currentHouseKey]?.exteriors || [];
  });

  selectedExteriorObject = computed(() => {
    const exteriors = this.currentHouseExteriors();
    const index = this.currentExteriorIndex();
    if (exteriors.length > index && index >= 0) {
      return exteriors[index];
    }
    return null;
  });

  selectExterior(index: number): void {
    this.currentExteriorIndex.set(index);
    const exterior = this.selectedExteriorObject();
    if (exterior) {
      this.selectedExterior.set(exterior.name);
    } else {
      this.selectedExterior.set('');
    }
  }

  nextDrawing() {
    const drawings = this.houses[this.selectedHouse()].drawing;
    const currentIndex = this.currentDrawingIndex();
    const nextIndex = (currentIndex + 1) % drawings.length;
    this.currentDrawingIndex.set(nextIndex);
  }

  nextRender() {
    const renders = this.houses[this.selectedHouse()].renders;
    const currentIndex = this.currentRenderIndex();
    const nextIndex = (currentIndex + 1) % renders.length;
    this.currentRenderIndex.set(nextIndex);
  }

  currentRenderText() {
    return this.currentRenderIndex() === 0 ? 'PARTER' : 'PIĘTRO';
  }

  sliderImages = computed(() => {
    return this.houses[this.selectedHouse()].images;
    // If you want to ensure these are preloaded too, they’re covered by preloadRest()
  });

  openModal(image: string, zoomed: boolean = false) {
    this.selectedImage.set(image);
    this.isZoomedModal.set(zoomed);
    const modalElement = document.getElementById('enlargeModal');
    if (modalElement) {
      const modalInstance = new (window as any).bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }

  ngAfterViewInit() {
    new Splide(this.houseCarousel.nativeElement, {
      type: 'slide',
      rewind: true,
      perPage: 4,
      gap: '1rem',
      pagination: false,
      arrows: true,
      breakpoints: {
        1024: { perPage: 4 },
        768: { perPage: 3 },
        480: { perPage: 2 },
      },
    }).mount();

    if (this.currentHouseExteriors().length > 0 && this.selectedExterior() === '') {
      this.selectExterior(0);
    }
  }
}
