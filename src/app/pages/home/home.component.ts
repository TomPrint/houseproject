import { Component, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FaderComponent } from "../../shared/fader/fader.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { houses } from '../offer/houses';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FaderComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  houses = houses;
  houseList = Object.entries(this.houses).map(([key, house]) => ({
    key,
    ...house,
  }));

  @ViewChild('houseCarousel') houseCarousel!: ElementRef;
  private splide?: Splide;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const mobileNav = document.getElementById('mobileNav');
    const isMobileMenuOpen = mobileNav?.classList.contains('show') ?? false;
    // this.showScrollTop = window.pageYOffset > 300 && !isMobileMenuOpen;
  }

  constructor(private router: Router) {}

  goToOffer(houseKey: string) {
    this.router.navigate(['/oferta'], { queryParams: { house: houseKey } });
  }

  onActiveHouseClick(houseKey: string, event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    const slide = target?.closest('.splide__slide');
    if (slide?.classList.contains('is-active')) {
      this.goToOffer(houseKey);
    }
  }


  ngAfterViewInit() {
    this.splide = new Splide(this.houseCarousel.nativeElement, {
      type: 'loop',
      focus: 'center',
      perPage: 3,
      gap: '1rem',
      pagination: false,
      arrows: true,
      drag: true,
      breakpoints: {
        768: { perPage: 1 },
      },
    });

    this.splide.mount();
  }
}
