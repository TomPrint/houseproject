import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  goToContact(event?: Event) {
    event?.preventDefault();
    this.router.navigate(['/'], { fragment: 'contact' }).then(() => {
      setTimeout(() => this.viewportScroller.scrollToAnchor('contact'), 50);
    });
  }
}
