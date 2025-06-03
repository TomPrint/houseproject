import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  animate = false;

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => {
      this.animate = true;
    }, 50); // Ensure DOM update
  }

  ngOnInit() {
    // Optional: delay the start a little for smoother UX
    setTimeout(() => {
      this.animate = true;
    }, 100);
  }

}
