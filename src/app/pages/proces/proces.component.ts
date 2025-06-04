import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proces',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './proces.component.html',
  styleUrl: './proces.component.css'
})
export class ProcesComponent   {

images = [
  '/assets/business1.webp',
  '/assets/business2.webp',
  '/assets/business3.webp',
  '/assets/business4.webp',
  '/assets/business5.webp'
];





  //! KOD DO WKRTÓTCE 
  // cells: Array<{ img: string, opacity: number }> = [];
  // private intervalId: any;

  // ngOnInit() {
  //   // Inicjalizacja komórek siatki
  //   for (let i = 0; i < 100; i++) {
  //     this.cells.push({
  //       img: Math.random() > 0.5 ? '/assets/PT 200.png' : '/assets/PT 229.png',
  //       opacity: Math.random()*0.2 // Początkowa losowa przezroczystość
  //     });
  //   }

  //   // Zmieniaj losową przezroczystość co 2 sekundy
  //   this.intervalId = setInterval(() => {
  //     this.cells.forEach(cell => {
  //       cell.opacity = Math.random()*0.5; // Zmieniaj przezroczystość losowo
  //     });
  //   }, 2000);
  // }

  // ngOnDestroy() {
  //   // Wyczyść interwał po zniszczeniu komponentu
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
}