import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";





@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'] 
})
export class OfferComponent {

}
