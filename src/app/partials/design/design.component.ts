import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit, OnChanges {
  @Input() houseData: any; 
  @Input() selectedInterior: string = '';
  @Input() selectedExterior: string = '';
  @Input() currentInteriorIndex: number = 0; 
  @Input() currentExteriorIndex: number = 0;

  // Initialize with the first choices
  ngOnInit() {
    if (this.houseData) {
      this.initializeSelections();
    }
  }

  // React to input changes (when houseData changes)
  ngOnChanges() {
    if (this.houseData) {
      this.resetSelections();
    }
  }

  // Initialize selections for the current house
  private initializeSelections() {
    this.selectedInterior = this.houseData.interiors[this.currentInteriorIndex].name;
    this.selectedExterior = this.houseData.exteriors[this.currentExteriorIndex].name;
  }

  // Reset selections and indices when switching houses
  private resetSelections() {
    this.currentInteriorIndex = 0;
    this.currentExteriorIndex = 0;
    this.initializeSelections();
  }

  // Navigate to the next interior
  nextInterior() {
    this.currentInteriorIndex =
      (this.currentInteriorIndex + 1) % this.houseData.interiors.length;
    this.selectedInterior = this.houseData.interiors[this.currentInteriorIndex].name;
  }

  // Navigate to the next exterior
  nextExterior() {
    this.currentExteriorIndex =
      (this.currentExteriorIndex + 1) % this.houseData.exteriors.length;
    this.selectedExterior = this.houseData.exteriors[this.currentExteriorIndex].name;
  }
}
