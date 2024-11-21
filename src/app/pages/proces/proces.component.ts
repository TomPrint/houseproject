import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-proces',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './proces.component.html',
  styleUrl: './proces.component.css'
})
export class ProcesComponent {

}
