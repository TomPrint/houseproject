import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { BrownComponent } from "../../shared/brown/brown.component";
import { SliderComponent } from "../../shared/slider/slider.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { DesignComponent } from '../../partials/design/design.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [NavbarComponent, CommonModule, BrownComponent, SliderComponent, FooterComponent, DesignComponent],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  // Signals for managing the selected house
  selectedHouse = signal<'CALMA' | 'GIOIA'>('CALMA');
  selectedImage = signal<string>('');
  currentDrawingIndex = signal(0);
  currentRenderIndex = signal(0);
  selectedInterior = signal<string>(''); 
  selectedExterior = signal<string>(''); 
  currentInteriorIndex = signal(0);
  currentExteriorIndex = signal(0);

  // House data
  houses = {
    CALMA: {
      name: 'CALMA',
      image: '/assets/calma_house.png', // Main image for CALMA
      drawing: ['/assets/Calma_parter.webp', '/assets/Calma_gora.webp'], // Floor plans
      renders: ['/assets/Calma_render.webp', '/assets/Calma_render2.webp'], // Render images
      facades: [
        '/assets/Calma_facade1.webp',
        '/assets/Calma_facade2.webp',
        '/assets/Calma_facade3.webp',
        '/assets/Calma_facade4.webp',
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
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/CALMA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/CALMA_minimalistyczny_int.webp',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit quis risus cursus aliquet. Aenean accumsan venenatis ante, in posuere nunc vehicula id. Duis vel metus a dui gravida fermentum.`
        }
      ],
      exteriors: [
        {
          name: 'DREWNO',
          image: '/assets/CALMA_drewno_ext.webp',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit quis risus cursus aliquet. Aenean accumsan venenatis ante, in posuere nunc vehicula id. Duis vel metus a dui gravida fermentum.`
        },
        {
          name: 'METAL',
          image: '/assets/CALMA_metal_ext.webp',
          description: `Sipsum lemur sit amet, consectetur adipiscing elit. Curabitur vel velit quis risus cursus aliquet. Aenean accumsan venenatis ante, in posuere nunc vehicula id. Duis vel metus a dui gravida fermentum.`
        }
      ]
    },
    GIOIA: {
      name: 'GIOIA',
      image: '/assets/gioia_house.png', // Main image for GIOIA
      drawing: ['/assets/Gioia_parter.webp', '/assets/Gioia_gora.webp'], // Floor plans
      renders: ['/assets/Gioia_render.webp', '/assets/Gioia_render2.webp'], // Render images
      facades: [
        '/assets/Gioia_facade1.webp',
        '/assets/Gioia_facade2.webp',
        '/assets/Gioia_facade3.webp',
        '/assets/Gioia_facade4.webp',
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
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę.`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit quis risus cursus aliquet. Aenean accumsan venenatis ante, in posuere nunc vehicula id. Duis vel metus a dui gravida fermentum.`
        }
      ],
      exteriors: [
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_ext.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.`
        },
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel velit quis risus cursus aliquet. Aenean accumsan venenatis ante, in posuere nunc vehicula id. Duis vel metus a dui gravida fermentum.`
        }
      ]
    }
  };

  // Toggle between the houses
  toggleHouse(house: 'CALMA' | 'GIOIA') {
    this.selectedHouse.set(house);
    this.currentDrawingIndex.set(0); // Reset drawing index when switching houses

  // Reset current selections
  this.selectedInterior.set(''); // Clear selected interior
  this.selectedExterior.set(''); // Clear selected exterior

  // Reset the indices for interiors and exteriors
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

  openModal(image: string) {
    this.selectedImage.set(image); // Set the image to be displayed in the modal
    const modalElement = document.getElementById('enlargeModal');
    if (modalElement) {
      const modalInstance = new (window as any).bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }
}
