import { Component, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FaderComponent } from "../../shared/fader/fader.component"

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { SliderComponent } from "../../shared/slider/slider.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule, NavbarComponent, FooterComponent, FaderComponent, ContactComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Walk3dSanitizedUrl: SafeResourceUrl;
  loading = true; // Loading spinner
  // showScrollTop = false;
  sliderImages = [
  { src: 'assets/budynek-1.svg', caption: 'CALMA - użyt.: 27.8 m2 | zab.: 39.3 m2', houseKey: 'CALMA' },
  { src: 'assets/budynek-3.svg', caption: 'FRESCA - użytk.: 53.5 m2 | zab.: 58 m2 ', houseKey: 'FRESCA' },
  { src: 'assets/budynek-2.svg', caption: 'GIOIA - użytk.: 54.6 m2 | zab.: 67.8 m2' ,  houseKey: 'GIOIA' },
  { src: 'assets/budynek-4.svg', caption: 'ARIOSA - użytk.: 54.8 m2 | zab.: 69.8 m2 ', houseKey: 'ARIOSA' },
  { src: 'assets/budynek-6.svg', caption: 'SOLARE - użytk: 78.5 m2 | zab.: 70 m2 ', houseKey: 'SOLARE' },
  { src: 'assets/budynek-9.svg', caption: 'RICCA - użytk.: 110.5 m2 | zab.: 67.8 m2 ', houseKey: 'RICCA' },
  { src: 'assets/budynek-5.svg', caption: 'ALLEGRA - użytk.: 40.5 m2 | zab.: 65.3 m2 ', houseKey: 'ALLEGRA' },
  { src: 'assets/budynek-10.svg', caption: 'CARINA - użytk.: 53.7 m2 | zab.: 58 m2 ', houseKey: 'CARINA' },
  { src: 'assets/budynek-8.svg', caption: 'MODERNA - użytk.: 61.5 m2 | zab.: 57.6 m2 ', houseKey: 'MODERNA'  },
  { src: 'assets/budynek-7.svg', caption: 'TONICA - użytk.: 68.8 m2 | zab.: 53.8 m2 ', houseKey: 'TONICA'  },
  
  
  
];


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const mobileNav = document.getElementById('mobileNav');
    const isMobileMenuOpen = mobileNav?.classList.contains('show') ?? false;
    
    // this.showScrollTop = window.pageYOffset > 300 && !isMobileMenuOpen;
  }

  // ngAfterViewInit() {
  //   const mobileNav = document.getElementById('mobileNav');
  //   if (mobileNav) {
  //     mobileNav.addEventListener('shown.bs.collapse', () => this.updateScrollButtonVisibility());
  //     mobileNav.addEventListener('hidden.bs.collapse', () => this.updateScrollButtonVisibility());
  //   }
  // }

  // updateScrollButtonVisibility() {
  //   const mobileNav = document.getElementById('mobileNav');
  //   const isMobileMenuOpen = mobileNav?.classList.contains('show') ?? false;
  //   this.showScrollTop = window.pageYOffset > 300 && !isMobileMenuOpen;
  // }


  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://livetour.istaging.com/478b7e8f-43ca-4609-9391-1c8074e210fb?index=5';
    this.Walk3dSanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onIframeLoad() {
    // Add a delay to make the spinner visible for at least 500ms
    setTimeout(() => {
      this.loading = false; // Hide the loading spinner after the delay
    }, 500); // Adjust the delay duration as needed
  }

  // scrollToTop(): void {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

}