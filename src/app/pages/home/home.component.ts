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



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule, NavbarComponent, FooterComponent, FaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Walk3dSanitizedUrl: SafeResourceUrl;
  loading = true; // Loading spinner
  // showScrollTop = false;

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