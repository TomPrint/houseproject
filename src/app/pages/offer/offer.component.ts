import { Component, computed, signal, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { BrownComponent } from '../../shared/brown/brown.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { houses } from './houses';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    BrownComponent,
    FooterComponent,
  ],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements AfterViewInit {
  houses = houses;

  selectedHouse = signal<keyof typeof houses>('CALMA');
  selectedImage = signal<string>('');
  isZoomedModal = signal(false); // New signal to control zoom

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

  toggleHouse(house: string) {
    this.selectedHouse.set(house as keyof typeof houses);
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
