import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { houses } from '../offer/houses';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit, OnDestroy {
  housesData = houses;
  interiorStyles = ['NOWOCZESNY', 'SKANDYNAWSKI', 'MINIMALISTYCZNY'];
  galleryData: { style: string; calmaImage: string; gioiaImage: string; description: string }[] = [];
  selectedImage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.prepareGalleryData();
  }

  ngOnDestroy(): void {
    // Cleanup logic here
  }

  prepareGalleryData() {
    this.interiorStyles.forEach(styleName => {
      const calmaInterior = this.housesData.CALMA.interiors.find(interior => interior.name === styleName);
      const gioiaInterior = this.housesData.GIOIA.interiors.find(interior => interior.name === styleName);

      if (calmaInterior && gioiaInterior) {
        this.galleryData.push({
          style: styleName,
          calmaImage: calmaInterior.image,
          gioiaImage: gioiaInterior.image,
          description: calmaInterior.description // Using description from CALMA, as requested
        });
      }
    });
  }

  openModal(image: string) {
    this.selectedImage = image;
    const modalElement = document.getElementById('enlargeModal');
    if (modalElement) {
      const modalInstance = new (window as any).bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }
}