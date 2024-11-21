import { Component, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Splide from '@splidejs/splide';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Walk3dSanitizedUrl: SafeResourceUrl;
  loading = true; // Loading spinner

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://livetour.istaging.com/478b7e8f-43ca-4609-9391-1c8074e210fb?index=5';
    this.Walk3dSanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // ngAfterViewInit() {
  //   new Splide('#splide', {
  //     type: 'loop',
  //     perPage: 1,
  //     focus: 'center',
  //     gap: '1rem',
  //     padding: '20%',
  //     speed: 1800,
  //     lazyLoad: 'nearby',
  //   }).mount();
  // }

  

  onIframeLoad() {
    // Add a delay to make the spinner visible for at least 500ms
    setTimeout(() => {
      this.loading = false; // Hide the loading spinner after the delay
    }, 500); // Adjust the delay duration as needed
  }
}