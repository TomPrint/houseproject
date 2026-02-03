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
}
