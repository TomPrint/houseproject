import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-virtualtour',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, NavbarComponent],
  templateUrl: './virtualtour.component.html',
  styleUrl: './virtualtour.component.css'
})
export class VirtualtourComponent {
  walk3dSanitizedUrl: SafeResourceUrl;
  loading = true;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://livetour.istaging.com/478b7e8f-43ca-4609-9391-1c8074e210fb?index=1';
    this.walk3dSanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onIframeLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
