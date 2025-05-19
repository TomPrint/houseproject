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
  currentDrawingIndex = signal(0);
  currentRenderIndex = signal(0);
  selectedInterior = signal<string>('');
  selectedExterior = signal<string>('');
  currentInteriorIndex = signal(0);
  currentExteriorIndex = signal(0);

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

  openModal(image: string) {
    this.selectedImage.set(image);
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
  }
}
