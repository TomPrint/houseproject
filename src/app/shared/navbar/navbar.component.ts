import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  showScrollTop = false;

@HostListener('window:scroll', [])
  onWindowScroll() {
    const mobileNav = document.getElementById('mobileNav');
    const isMobileMenuOpen = mobileNav?.classList.contains('show') ?? false;
    
    this.showScrollTop = window.pageYOffset > 300 && !isMobileMenuOpen;
  }

  ngAfterViewInit() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
      mobileNav.addEventListener('shown.bs.collapse', () => this.updateScrollButtonVisibility());
      mobileNav.addEventListener('hidden.bs.collapse', () => this.updateScrollButtonVisibility());
    }
  }

  updateScrollButtonVisibility() {
    const mobileNav = document.getElementById('mobileNav');
    const isMobileMenuOpen = mobileNav?.classList.contains('show') ?? false;
    this.showScrollTop = window.pageYOffset > 300 && !isMobileMenuOpen;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  constructor(private router: Router){}


isHomePage(): boolean {
  return this.router.url === '/';
}

closeMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.classList.remove('show'); // Bootstrapowy sposób na zwinięcie menu
  }
}


}