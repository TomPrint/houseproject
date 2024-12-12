import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  @Input() houseData: any; 
  @Input() selectedInterior: string = '';
  @Input() selectedExterior: string = '';
  @Input() currentInteriorIndex = signal(0);
  @Input() currentExteriorIndex = signal(0);

  // Navigate interiors
  nextInterior() {
    const interiors = this.houseData.interiors;
    const nextIndex = (this.currentInteriorIndex() + 1) % interiors.length;
    this.currentInteriorIndex.set(nextIndex);
  }

  // Navigate exteriors
  nextExterior() {
    const exteriors = this.houseData.exteriors;
    const nextIndex = (this.currentExteriorIndex() + 1) % exteriors.length;
    this.currentExteriorIndex.set(nextIndex);
  }

  // Set selected interior
  selectInterior() {
    const interior = this.houseData.interiors[this.currentInteriorIndex()];
    this.selectedInterior = interior.name;
  }

  // Set selected exterior
  selectExterior() {
    const exterior = this.houseData.exteriors[this.currentExteriorIndex()];
    this.selectedExterior = exterior.name;
  }
}
