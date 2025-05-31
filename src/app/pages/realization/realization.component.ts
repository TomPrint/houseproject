import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-realization',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './realization.component.html',
  styleUrl: './realization.component.css'
})
export class RealizationComponent {

}
