import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Splide from '@splidejs/splide';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
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