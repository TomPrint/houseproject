// catalog.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component"; 
import { RouterModule } from '@angular/router'; 




@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, RouterModule], // Add CommonModule to imports
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
 
}
