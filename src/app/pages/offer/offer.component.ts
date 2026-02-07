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

  displayHouseName() {
    return this.formatHouseName(this.houses[this.selectedHouse()].name);
  }

  private formatHouseName(name: string): string {
    return name.replace(/^\d+-/, '');
  }

  // Per-image spinners
  frontLoading = signal<boolean>(true);
  backLoading = signal<boolean>(true);

  // Page overlay
  isLoading = signal<boolean>(true);

  @ViewChild('houseCarousel') houseCarousel!: ElementRef;
  private splide?: Splide;

  // NEW: refs for hero images so we can check .complete/.naturalWidth
  @ViewChild('frontImg') frontImgRef!: ElementRef<HTMLImageElement>;
  @ViewChild('backImg')  backImgRef!: ElementRef<HTMLImageElement>;

  houseList = computed(() =>
    Object.entries(this.houses).map(([key, house]) => ({
      key,
      ...house,
      displayName: this.formatHouseName(house.name),
    }))
  );

  ngOnInit(): void {
    // Preload hero (front/back) for ALL houses (lightweight + big UX win)
    this.preloadHeroesForAllHouses();

    // Keep overlay until current house’s front/back load
    this.isLoading.set(true);

    this.route.queryParamMap.subscribe((params) => {
      const houseParam = params.get('house');
      let houseKey: keyof typeof houses = this.selectedHouse();

      if (houseParam) {
        const foundHouseKey = Object.keys(this.houses).find(
          (key) => key.toLowerCase() === houseParam.toLowerCase()
        );
        if (foundHouseKey) {
          houseKey = foundHouseKey as keyof typeof houses;
        }
      }

      // Start preloading everything for the house (background)
      this.preloadHouseRest(houseKey);

      // If URL points to a different house, switch (spinners + overlay reset inside)
      if (houseParam && houseKey) {
        this.toggleHouse(houseKey);
      } else {
        // First load safety: if the initial images are already cached, clear spinners
        setTimeout(() => this.syncSpinnerWithImgCompleteness(), 0);
      }
    });
  }

  /** Preload only the hero (front/back) for every house once at startup */
  private preloadHeroesForAllHouses(): void {
    const urls: string[] = [];
    for (const key of Object.keys(this.houses) as Array<keyof typeof houses>) {
      const h = this.houses[key];
      urls.push(h.imagefront, h.imageback);
    }
    this.imagePreloadingService.preload(urls);
  }

  /** Preload only front/back for a specific house */
  private preloadHouseHero(houseKey: keyof typeof houses): void {
    const h = this.houses[houseKey];
    this.imagePreloadingService.preload([h.imagefront, h.imageback]);
  }

  /** Preload the rest of assets for the selected house (background, optional) */
  private preloadHouseRest(houseKey: keyof typeof houses): void {
    const h = this.houses[houseKey];
    const rest = [
      h.drawing,
      ...h.renders,
      ...h.interiors.map((i) => i.image),
      ...h.exteriors.map((e) => e.image),
      ...h.images,
    ].filter(Boolean);
    this.imagePreloadingService.preload(rest);
  }

  /** Kept for compatibility (but now only does "rest", heroes are handled separately) */
  preloadHouseImages(houseKey: keyof typeof houses): void {
    this.preloadHouseRest(houseKey);
  }

  toggleHouse(house: string | keyof typeof houses) {
    const key = house as keyof typeof houses;

    // ✅ If same house clicked, do NOT reset loading; just make sure spinners/overlay are off.
    if (key === this.selectedHouse()) {
      this.frontLoading.set(false);
      this.backLoading.set(false);
      this.isLoading.set(false);
      return;
    }

    // Show overlay + spinners for the new house
    this.isLoading.set(true);
    this.frontLoading.set(true);
    this.backLoading.set(true);

    // Prewarm hero + rest
    this.preloadHouseHero(key);
    this.preloadHouseRest(key);

    // Switch state
    this.selectedHouse.set(key);
    this.currentDrawingIndex.set(0);
    this.selectedInterior.set('');
    this.selectedExterior.set('');
    this.currentInteriorIndex.set(0);
    this.currentExteriorIndex.set(0);

    const newExteriors = this.houses[this.selectedHouse()]?.exteriors;
    this.selectedExterior.set(newExteriors?.[0]?.name ?? '');

    // After DOM updates src bindings, verify if images are already complete (cache hit)
    setTimeout(() => this.syncSpinnerWithImgCompleteness(), 0);
  }


  // Image event handlers (hide overlay when both heroes are done)
  onFrontLoad()  { this.frontLoading.set(false); this.maybeHideOverlay(); }
  onBackLoad()   { this.backLoading.set(false);  this.maybeHideOverlay(); }
  onFrontError() { this.frontLoading.set(false); this.maybeHideOverlay(); }
  onBackError()  { this.backLoading.set(false);  this.maybeHideOverlay(); }

  private syncSpinnerWithImgCompleteness() {
    const front = this.frontImgRef?.nativeElement;
    const back  = this.backImgRef?.nativeElement;

    if (front?.complete && front.naturalWidth > 0) {
      this.frontLoading.set(false);
    }
    if (back?.complete && back.naturalWidth > 0) {
      this.backLoading.set(false);
    }
    this.maybeHideOverlay();
  }

  private maybeHideOverlay() {
    if (!this.frontLoading() && !this.backLoading()) {
      this.isLoading.set(false);
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
    this.selectedExterior.set(exterior ? exterior.name : '');
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

  sliderImages = computed(() => this.houses[this.selectedHouse()].images);

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
    const splide = new Splide(this.houseCarousel.nativeElement, {
      type: 'loop',
      focus: 'center',
      perPage: 3,
      gap: '1rem',
      pagination: false,
      arrows: true,
      breakpoints: {
        768: { perPage: 1 },
      },
    });

    splide.on('move', (newIndex: number) => {
      const list = this.houseList();
      const current = list[newIndex]?.key as keyof typeof houses | undefined;
      const prev = list[newIndex - 1]?.key as keyof typeof houses | undefined;
      const next = list[newIndex + 1]?.key as keyof typeof houses | undefined;
      if (current) this.preloadHouseHero(current);
      if (prev) this.preloadHouseHero(prev);
      if (next) this.preloadHouseHero(next);
    });

    splide.on('move', () => {
      const list = this.houseList();
      const key = list[splide.index]?.key as keyof typeof houses | undefined;
      if (key) this.toggleHouse(key);
    });

    splide.mount();
    this.splide = splide;

    // Sync carousel position with selected house (e.g., from query param)
    const list = this.houseList();
    const selectedKey = this.selectedHouse();
    const selectedIndex = list.findIndex((h) => h.key === selectedKey);
    if (selectedIndex >= 0) {
      splide.go(selectedIndex);
    }

    if (this.currentHouseExteriors().length > 0 && this.selectedExterior() === '') {
      this.selectExterior(0);
    }

    // First view: ensure spinners reflect actual image state once view init completes
    setTimeout(() => this.syncSpinnerWithImgCompleteness(), 0);
  }
}
