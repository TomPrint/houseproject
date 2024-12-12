import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnChanges{
  @Input() houseData: any; 
  @Input() selectedInterior: string = '';
  @Input() selectedExterior: string = '';
  @Input() currentInteriorIndex: number = 0; 
  @Input() currentExteriorIndex: number = 0;

    // React to input changes
    ngOnChanges() {
      // Ensure indices are reset if new house data is provided
      if (this.houseData) {
        this.currentInteriorIndex = 0;
        this.currentExteriorIndex = 0;
   
    // Clear previously selected interior and exterior
    this.selectedInterior = '';
    this.selectedExterior = '';

        
      }
    }

    nextInterior() {
      this.currentInteriorIndex =
        (this.currentInteriorIndex + 1) % this.houseData.interiors.length;
    }
  
    // Navigate through exteriors
    nextExterior() {
      this.currentExteriorIndex =
        (this.currentExteriorIndex + 1) % this.houseData.exteriors.length;
    }
  
    // Select the current interior
    selectInterior() {
      this.selectedInterior = this.houseData.interiors[this.currentInteriorIndex].name;
    }
  
    // Select the current exterior
    selectExterior() {
      this.selectedExterior = this.houseData.exteriors[this.currentExteriorIndex].name;
    }
  }

  

