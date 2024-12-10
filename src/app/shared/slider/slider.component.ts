import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Splide('#splide', {
      type   : 'loop',
      perPage: 1,
      focus    : "center",
      gap    : '1rem',
      padding: '20%',
      speed: 1800,
      lazyLoad: 'nearby',
    }).mount();
  }
}
