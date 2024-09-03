// catalog.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

type CardProperty = 'size' | 'floors' | 'roofType' | 'beds' | 'baths';

interface Card {
  title: string;
  description: string;
  imgSrc: string;
  isHovered: boolean;
  size: number;
  floors: number;
  roofType: string;
  beds: number;
  baths: number;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  cards: Card[] = [
    { title: 'Domek 1', description: 'Projekt domu 1 o przestronnym wnętrzu', imgSrc: 'assets/homepage_house_img.jpg', isHovered: false, size: 100, floors: 2, roofType: 'skośny', beds: 5, baths: 2 },
    { title: 'Domek 2', description: 'Projekt domu 2 o dużej ilości przeszkleń', imgSrc: 'assets/homepage_house_img.jpg', isHovered: false, size: 50, floors: 1, roofType: 'płaski', beds: 3, baths: 1 },
    { title: 'Domek 3', description: 'Projekt domu 3 z ekologicznych materiałów', imgSrc: 'assets/homepage_house_img.jpg', isHovered: false, size: 150, floors: 2, roofType: 'skośny', beds: 4, baths: 2 },
    { title: 'Domek 4', description: 'Projekt domu 4 dla dużej rodziny', imgSrc: 'assets/homepage_house_img.jpg', isHovered: false, size: 220, floors: 2, roofType: 'płaski', beds: 7, baths: 3 }
  ];

  private currentSortProperty: CardProperty | null = null;
  private isAscending: boolean = true;

  sortBy(property: CardProperty): void {
    if (this.currentSortProperty === property) {
      // Toggle the sort direction if the same property is clicked
      this.isAscending = !this.isAscending;
    } else {
      // Set the new sort property and default to ascending
      this.currentSortProperty = property;
      this.isAscending = true;
    }

    if (property === 'roofType') {
      // Handle string sorting for 'roofType'
      this.cards.sort((a, b) => {
        return this.isAscending 
          ? a[property].localeCompare(b[property]) 
          : b[property].localeCompare(a[property]);
      });
    } else {
      // Handle numeric sorting for other properties
      this.cards.sort((a, b) => {
        const comparison = (a[property] as number) - (b[property] as number);
        return this.isAscending ? comparison : -comparison;
      });
    }
  }

  onMouseOver(card: Card): void {
    card.isHovered = true;
  }

  onMouseLeave(card: Card): void {
    card.isHovered = false;
  }
}
