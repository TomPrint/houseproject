import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieComponent } from './cookie/cookie.component';
import { FooterComponent } from "./shared/footer/footer.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CookieComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ammerhouse';
  @ViewChild(CookieComponent) cookieComponent!: CookieComponent;

  openCookieSettings(): void {
    this.cookieComponent.showBanner = true;
  }

}
