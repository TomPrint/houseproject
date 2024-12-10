import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { BrownComponent } from "../../shared/brown/brown.component";

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink, NavbarComponent, CommonModule, BrownComponent],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  // Signals for managing the selected house
  selectedHouse = signal<'CALMA' | 'GIOIA'>('CALMA');
  selectedImage = signal<string>('');
  // Signals for managing the current drawing index
  currentDrawingIndex = signal(0);
  currentRenderIndex = signal(0);
 

  // House data
  houses = {
    CALMA: {
      name: 'CALMA',
      image: '/assets/calma_house.png', // Main image for CALMA
      drawing: ['/assets/Calma_parter.webp', '/assets/Calma_gora.webp'], // Floor plans
      renders: ['/assets/Calma_render.webp', '/assets/Calma_render2.webp'], //render images
      facades: [
        '/assets/Calma_facade1.png',
        '/assets/Calma_facade2.png',
        '/assets/Calma_facade3.png',
        '/assets/Calma_facade4.png',
      ], // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny + aneks kuchenny - 13,3 m²',
        '3. Łaźienka - 3,9 m²',
        'Powierzchnia dodatkowa:',
        '4. Antresola - 6,6 m², powierzchnia podłogi - 9,8 m²',
        '5. Taras - 4,4 m²',
        '6. Taras - 4,3 m2'
      ],
    },
    GIOIA: {
      name: 'GIOIA',
      image: '/assets/gioia_house.png', // Main image for GIOIA
      drawing: ['/assets/Gioia_parter.webp', '/assets/Gioia_gora.webp'], // Floor plans
      renders: ['/assets/Gioia_render.webp', '/assets/Gioia_render2.webp'], //render images
      facades: [
        '/assets/Gioia_facade1.png',
        '/assets/Gioia_facade2.png',
        '/assets/Gioia_facade3.png',
        '/assets/Gioia_facade4.png',
      ], // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny + aneks kuchenny - 26,3 m²',
        '3. Pokój - 7,5 m²',
        '4. Łazienka - 4,3 m²',
        '5. Hol - 1,75 m², powierzchnia podłogi - 1,9 m²',
        '6. Pokój - 4,7 m², powierzchnia podłogi - 8,1 m²',
        '7. Pokój - 6,65 m², powierzchnia podłogi - 11,2 m²',
        'Powierzchnia dodatkowa:',
        '8. Taras - 9,2 m²',
        '9. Taras - 4,4 m²'
      ],
    },
  };

  // Toggle between the houses
  toggleHouse(house: 'CALMA' | 'GIOIA') {
    this.selectedHouse.set(house);
    this.currentDrawingIndex.set(0); // Reset drawing index when switching houses
    console.log(`Selected house: ${house}`);
  }

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


  openModal(image: string) {
    this.selectedImage.set(image); // Set the image to be displayed in the modal
    const modalElement = document.getElementById('enlargeModal');
    if (modalElement) {
      const modalInstance = new (window as any).bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }





}


