import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
  steps = [
    {
      title: '1. Produkcja w hali – 100% kontrola jakości',
      description: 'Każdy budynek modułowy Ammer House powstaje w naszej hali produkcyjnej. Dzięki temu cały proces – od konstrukcji po wykończenie – odbywa się w stałych, kontrolowanych warunkach. To gwarantuje precyzję wykonania, niezależność od pogody i wyeliminowanie wielu błędów typowych dla budowy w terenie.',
      image: '/assets/production.webp',
    },
    {
      title: '2. Modułowa konstrukcja szkieletowa',
      description: 'Bazą każdego domu jest solidny szkielet stalowy lub drewniany (w zależności od projektu), który spełnia wszystkie normy bezpieczeństwa i trwałości.',
      points: ['Panele strukturalne objęte ochroną patentową', 'Połączenie materiału nośnego i izolacyjnego'],
      image: '/assets/insulation.webp',
    },
    {
      title: '3. Wysokiej klasy izolacja termiczna',
      description: 'Nasze budynki spełniają normy domów energooszczędnych i pasywnych. Osiągamy to dzięki zastosowaniu:',
      points: ['nowoczesnych materiałów termoizolacyjnych', 'szczelnej stolarki okiennej', 'przemyślanej wentylacji i systemów grzewczych'],
      image: '/assets/heat.webp',
    },
    {
      title: '4. Gotowe wnętrze prosto z fabryki',
      description: 'W zależności od projektu, dom może opuścić fabrykę z gotowym wnętrzem:',
      points: ['tynki, podłogi, łazienki, kuchnie', 'instalacje wod-kan, elektryczne, grzewcze', 'pełne wyposażenie (na życzenie)'],
      image: '/assets/interior.webp',
    },
    {
      title: '5. Transport i montaż u klienta',
      description: 'Gotowe moduły przewozimy na miejsce inwestycji i montujemy je w ciągu 1–2 dni. To szybki, czysty i precyzyjny proces, który nie wymaga ciężkiego sprzętu budowlanego.',
      image: '/assets/module.webp',
    },
    {
      title: '6. Możliwość rozbudowy i przenoszenia',
      description: 'Każdy dom modułowy Ammer House można łatwo:',
      points: ['rozbudować o kolejne moduły', 'przestawić w inne miejsce', 'zdemontować i złożyć na nowo'],
      image: '/assets/transport.webp',
    },
  ];
}