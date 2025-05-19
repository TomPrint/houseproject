import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-fader',
  standalone: true,
  imports: [],
  templateUrl: './fader.component.html',
  styleUrl: './fader.component.css'
})

export class FaderComponent implements AfterViewInit {
  @ViewChild('splide') splideElem!: ElementRef;

  ngAfterViewInit() {
    new Splide(this.splideElem.nativeElement, {
      type: 'fade',
      rewind: true,
      autoplay: true,
      interval: 6000,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 3000,
      arrows: false,
      pagination: false,
    }).mount();
  }
}