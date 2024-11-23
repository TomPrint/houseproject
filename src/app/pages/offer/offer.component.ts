import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink, NavbarComponent, CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  // Signals for managing the selected house
  selectedHouse = signal<'CALMA' | 'GIOIA'>('CALMA');

  // House names and paths
  houses = {
    CALMA: {
      name: 'CALMA',
      image: '/assets/calma_house.png'
    },
    GIOLA: {
      name: 'GIOLA',
      image: '/assets/gioia_house.png'
    }
  };

  // Toggle between the houses
  toggleHouse(house: 'CALMA' | 'GIOIA') {
    this.selectedHouse.set(house);
  }
}
