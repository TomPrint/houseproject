import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { BrownComponent } from "../../shared/brown/brown.component";
import { SliderComponent } from "../../shared/slider/slider.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { DesignComponent } from '../../partials/design/design.component';
import { houses } from './houses'; // Import houses as a regular variable

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [NavbarComponent, CommonModule, BrownComponent, SliderComponent, FooterComponent, DesignComponent],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  houses = houses;
  // Signals for managing the selected house
  selectedHouse = signal<keyof typeof houses>('CALMA');
  selectedImage = signal<string>('');
  currentDrawingIndex = signal(0);
  currentRenderIndex = signal(0);
  selectedInterior = signal<string>(''); 
  selectedExterior = signal<string>(''); 
  currentInteriorIndex = signal(0);
  currentExteriorIndex = signal(0);


  // House data parsed from the imported houses variable
  houseList = computed(() =>
    Object.entries(this.houses).map(([key, house]) => ({
      key,
      ...house,
    }))
  );


  // Toggle between the houses
  toggleHouse(house: string) {
    this.selectedHouse.set(house as keyof typeof houses);
    this.currentDrawingIndex.set(0);
    this.selectedInterior.set('');
    this.selectedExterior.set('');
    this.currentInteriorIndex.set(0);
    this.currentExteriorIndex.set(0);
  }

  // Navigate interiors


  // Switch to the next drawing
  nextDrawing() {
    const drawings = this.houses[this.selectedHouse()].drawing;
    const currentIndex = this.currentDrawingIndex();
    const nextIndex = (currentIndex + 1) % drawings.length;
    this.currentDrawingIndex.set(nextIndex);
  }

  // Switch to the next render
  nextRender() {
    const renders = this.houses[this.selectedHouse()].renders;
    const currentIndex = this.currentRenderIndex();
    const nextIndex = (currentIndex + 1) % renders.length;
    this.currentRenderIndex.set(nextIndex);
  }

  // Get text for the current render
  currentRenderText() {
    return this.currentRenderIndex() === 0 ? 'PARTER' : 'PIĘTRO';
  }

  sliderImages = computed(() => {
    return this.houses[this.selectedHouse()].images;
  });

  openModal(image: string) {
    this.selectedImage.set(image); // Set the image to be displayed in the modal
    const modalElement = document.getElementById('enlargeModal');
    if (modalElement) {
      const modalInstance = new (window as any).bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }
}
