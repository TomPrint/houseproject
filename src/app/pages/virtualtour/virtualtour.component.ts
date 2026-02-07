import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

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
  headerText = 'PRZYKŁADOWY SPACER 3D PO DOMKU GIOIA';

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    const indexParam = Number(this.route.snapshot.queryParamMap.get('index'));
    const index = Number.isFinite(indexParam) && indexParam > 0 ? Math.floor(indexParam) : 1;
    if (index === 8) {
      this.headerText = 'SPACER 3D PO WIOSCE WAKACYJNEJ';
    }

    const url = `https://livetour.istaging.com/478b7e8f-43ca-4609-9391-1c8074e210fb?index=${index}`;
    this.walk3dSanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onIframeLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
