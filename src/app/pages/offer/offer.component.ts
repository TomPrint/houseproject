import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'] // Corrected here
})
export class OfferComponent {
  Walk3dSanitizedUrl: SafeResourceUrl;
  loading = true; // Loading spinner

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://livetour.istaging.com/478b7e8f-43ca-4609-9391-1c8074e210fb?index=5';
    this.Walk3dSanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onIframeLoad() {
    this.loading = false; // Hide the loading spinner
  }
}
