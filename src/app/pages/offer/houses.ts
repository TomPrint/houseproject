export const houses = {
    CALMA: {
      name: 'CALMA',
      square:  27.8, // Square footage of the house
      vector: '/assets/budynek-1.svg', // Main image for CALMA
      imagefront: '/assets/calma-front.webp',
      imageback:'/assets/calma-back.webp', 
      drawing: '/assets/rzut1.webp', // Floor plans
      renders: ['/assets/calma-render1.webp', '/assets/calma-render2.webp'],
      facade: '/assets/Elewacja1.svg', // Facade image
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny + aneks kuchenny - 13,3 m²',
        '3. Łaźienka - 3,9 m²',
        '4. Antresola - 6,6 m²',
        'Powierzchnia dodatkowa:',
        '5. Taras - 4,5 m²',
        '6. Ganek - 4,3 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/CALMA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/CALMA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/CALMA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main1.webp',
        'assets/main2.webp',
        'assets/main3.webp'
      ]
    },
    FRESCA: {
      name: 'FRESCA',
      square:  53.5,
      vector: '/assets/budynek-3.svg',
      imagefront: '/assets/inprogress.webp',
      imageback:'/assets/inprogress.webp',  // Main image for GIOIA
      drawing: '/assets/rzut3.webp', // Floor plans // Floor plans
      renders: ['/assets/inprogress.webp'], // Render images
      facade: '/assets/Elewacja3.svg',  // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny - 24,2 m²',
        '3. Kuchnia - 5,3 m²',
        '4. Łazienka - 3,8 m²',
        '8. Hol - 6,9 m²',
        '9. Pokój - 4,5 m²',
        '10. Pokój - 4,6 m²',
        'Powierzchnia dodatkowa:',
        '5. Taras - 11,8 m²',
        '6. Taras - 11,8 m²',
        '7. Ganek - 4,3 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },
    CARINA: {
      name: 'CARINA',
      square:  53.7,
      vector: '/assets/budynek-10.svg',
      imagefront: '/assets/carina-front.webp',
      imageback:'/assets/carina-back.webp',
      drawing: '/assets/rzut10.webp', // Floor plans
      renders: ['/assets/carina-render1.webp', '/assets/carina-render2.webp'], // Render images
      facade: '/assets/Elewacja10.svg',  // Facade images // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny + aneks kuchenny - 25,6 m²',
        '3. Łazienka - 4,2 m²',
        '4. Pokój - 7,5 m²',
        '7. Ganek - 4,3 m²',
        '8. Hol - 2,8 m²',
        '9. Pokój - 5,1 m²',
        'Powierzchnia dodatkowa:',
        '5. Taras - 4,2 m²',
        '6. Taras - 4,2 m²',
        '10. Antresola - 0,9 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },

    GIOIA: {
      name: 'GIOIA',
      square:  54.6,
      vector: '/assets/budynek-2.svg',
      imagefront: '/assets/gioia-front.webp',
      imageback:'/assets/gioia-back.webp', // Main image for GIOIA
      drawing: '/assets/rzut2.webp', // Floor plans
      renders: ['/assets/gioia-render1.webp', '/assets/gioia-render2.webp'], // Render images
      facade: '/assets/Elewacja2.svg', // Facade image, // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny + aneks kuchenny - 26,3 m²',
        '3. Pokój - 7,5 m²',
        '4. Łazienka - 4,3 m²',
        '5. Hol - 1,5 m²',
        '6. Pokój - 4,5 m²',
        '7. Pokój - 6,3 m²',
        'Powierzchnia dodatkowa:',
        '8. Taras - 9,3 m²',
        '9. Ganek - 4,3 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },

      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },
    ARIOSA: {
      name: 'ARIOSA',
      square:  54.8,
      vector: '/assets/budynek-4.svg',
      imagefront: '/assets/ariosa-front.webp',
      imageback:'/assets/ariosa-back.webp',  // Main image for GIOIA
      drawing: '/assets/rzut4.webp', // Floor plans // Floor plans
      renders: ['/assets/ariosa-render1.webp', '/assets/ariosa-render2.webp'], // Render images
      facade: '/assets/Elewacja4.svg',  // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,2 m²',
        '2. Pokój dzienny - 27,4 m²',
        '3. Kuchnia - 5,3 m²',
        '4. Łazienka - 3,8 m²',
        '8. Hol - 3,2 m²',
        '9. Pokój - 5,2 m²',
        '10. Pokój - 5,7 m²',
        'Powierzchnia dodatkowa:',
        '5. Taras - 11,6 m²',
        '6. Taras - 11,8 m²',
        '7. Ganek - 4,3 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },
    SOLARE: {
      name: 'SOLARE',
      square:  78.5,
      vector: '/assets/budynek-6.svg',
      imagefront: '/assets/solare-front.webp',
      imageback:'/assets/solare-back.webp',
      drawing: '/assets/rzut6.webp', // Floor plans // Floor plans
      renders: ['/assets/solare-render1.webp', '/assets/solare-render2.webp'], // Render images
      facade: '/assets/Elewacja6.svg',  // Facade images // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Hol - 5,3 m²',
        '2. Pokój dzienny + aneks kuchenny - 29,6 m²',
        '3. Łazienka - 4,7 m²',
        '4. Pokój - 14,5 m²',
        '7. Hol - 5,3 m²',
        '8. Pokój - 5,1 m²',
        '9. Pokój - 6,4 m²',
        '10. Pokój - 6,4 m²',
        '11. Łazienka - 1,2 m²',
        'Powierzchnia dodatkowa:',
        '5. Pom. tech. - 1,8 m²',
        '6. Taras - 7,5 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },

    ALLEGRA: {
      name: 'ALLEGRA',
      square:  40.5,
      vector: '/assets/budynek-5.svg',
      imagefront: '/assets/allegra-front.webp',
      imageback:'/assets/allegra-back.webp',  // Main image for GIOIA
      drawing: '/assets/rzut5.webp', // Floor plans // Floor plans
      renders: ['/assets/allegra-render1.webp',], // Render images
      facade: '/assets/Elewacja5.svg', // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4,5 m²',
        '2. Pokój dzienny - 17,7 m²',
        '3. Kuchnia - 5,3 m²',
        '4. Pokój - 9,2 m²',
        '5. Łazienka - 3,8 m²',
        'Powierzchnia dodatkowa:',
        '6. Taras - 11,7 m²',
        '7. Taras - 5,8 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },

    MODERNA: {
      name: 'MODERNA',
      square:  61.5,
      vector: '/assets/budynek-8.svg',
      imagefront: '/assets/moderna-front.webp',
      imageback: '/assets/moderna-back.webp',
      drawing: '/assets/rzut8.webp', // Floor plans // Floor plans
      renders: ['/assets/moderna-render1.webp', '/assets/moderna-render2.webp'], // Render images
      facade: '/assets/Elewacja8.svg',  // Facade images // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Hol - 3,9 m²',
        '2. WC + Pom. tech. - 4,1 m²',
        '3. Kuchnia - 4,7 m²',
        '4. Pokój dzienny - 20,5 m²',
        '7. Hol - 3,7 m²',
        '8. Pokój - 9,4 m²',
        '9. Pokój - 8,9 m²',
        '10. Łazienka + pralnia - 6,3 m²',
        'Powierzchnia dodatkowa:',
        '6. Taras - 2,9 m²',
        '11. Taras - 10,2 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },

    
   
    TONICA: {
      name: 'TONICA',
      square:  68.8,
      vector: '/assets/budynek-7.svg',
      imagefront: '/assets/tonica-front.webp',
      imageback:'/assets/tonica-back.webp',
      drawing: '/assets/rzut7.webp', // Floor plans// Floor plans
      renders: ['/assets/tonica-render1.webp', '/assets/tonica-render2.webp'], // Render images
      facade: '/assets/Elewacja7.svg',  // Facade images // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Hol - 3,6 m²',
        '2. Jadalnia + aneks kuchenny - 27,9 m²',
        '3. Łazienka - 4,2 m²',
        '6. Hol - 7,4 m²',
        '7. Łazienka - 2,7 m²',
        '8. Pokój - 13,9 m²',
        '9. Pokój - 9,1 m²',
        'Powierzchnia dodatkowa:',
        '4. Pom. tech. - 2,5 m²',
        '5. Taras - 6,3 m²',
        '10. Taras - 6,2 m²'
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    },

    RICCA: {
      name: 'RICCA',
      square:  110.5,
      vector: '/assets/budynek-9.svg',
      imagefront: '/assets/ricca-front.webp',
      imageback:'/assets/ricca-back.webp', 
      drawing: '/assets/rzut9.webp', // Floor plans // Floor plans
      renders: ['/assets/ricca-render1.webp', '/assets/ricca-render2.webp'], // Render images
      facade: '/assets/Elewacja9.svg',  // Facade images // Facade images
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Hol - 2,7 m²',
        '2. Kuchnia - 10,2 m²',
        '3. Pokój dzienny + jadalnia - 21,5 m²',
        '3. Taras - 9 m²',
        '4. Gabinet - 6,1 m²',
        '5. Pom. tech. - 2 m²',
        '5. Taras - 10,5 m²',
        '6. Łazienka - 3,1 m²',
        '8. Hol - 5,2 m²',
        '9. Pokój - 9,6 m²',
        '10. Pokój - 11,7 m²',
        '11. Pokój - 8,3 m²',
        '12. Łazienka - 7,4 m²',
        '13. Taras - 3,2 m²',
      ],
      interiors: [
        {
          name: 'NOWOCZESNY',
          image: '/assets/GIOIA_nowoczesny_int.webp',
          description: `Wnętrze, które łączy nowoczesny design z elegancją i funkcjonalnością. Dominują neutralne barwy – biele, szarości i beże oraz czerń – tworzące spokojną i stylową atmosferę. Wysokiej jakości materiały, takie jak naturalne drewno, zapewniają trwałość i estetykę. 
Proste i nowoczesne meble o minimalistycznych formach oraz designerskie, punktowe oświetlenie podkreślają subtelną elegancję przestrzeni. To harmonijne wnętrze jest idealne dla osób ceniących funkcjonalność i nowoczesny styl życia.
`
        },
        {
          name: 'SKANDYNAWSKI',
          image: '/assets/GIOIA_skandynawski_int.webp',
          description: `Skandynawski styl to nie tylko minimalizm, ale także praktyczność i wygoda. Meble o prostych kształtach są funkcjonalne i estetyczne, a inteligentne rozwiązania przestrzenne maksymalizują użyteczność każdego metra kwadratowego. 
To wnętrze jest idealne dla osób, które cenią prostotę i naturalne piękno, ale nie boją się odrobiny koloru. Dzięki przemyślanemu designowi i wysokiej jakości materiałom, przestrzeń ta jest nie tylko estetyczna, ale również komfortowa i funkcjonalna. To miejsce, w którym można czuć się swobodnie, zrelaksowanym i pełnym energii.
`
        },
        {
          name: 'MINIMALISTYCZNY',
          image: '/assets/GIOIA_minimalistyczny_int.webp',
          description: `Minimalizm połączony z japońską estetyką tworzy przestrzeń pełną spokoju i harmonii. Naturalne drewno i duże ilości światła wprowadzają ciepło i naturalność do każdej części domu. Proste linie i oszczędne formy podkreślają funkcjonalność oraz elegancję wnętrza, a subtelne akcenty dodają mu charakteru.
To wnętrze jest idealne dla osób ceniących prostotę, naturalne piękno oraz wysoką funkcjonalność. Dzięki przemyślanemu designowi oferuje przestrzeń, w której można czuć się zrelaksowanym i zintegrowanym z naturą.`
        }
      ],
      exteriors: [
        {
          name: 'METAL',
          image: '/assets/GIOIA_metal_ext.webp',
          description: `Fasada z blachy na rąbek łączy nowoczesny design z wytrzymałością, zapewniając długotrwałą ochronę domu. Dzięki zaawansowanemu montażowi na rąbek stojący, fasada jest estetyczna, szczelna i odporna na warunki atmosferyczne, na korozję oraz promieniowanie UV.`
        },
        {
          name: 'DREWNO',
          image: '/assets/GIOIA_drewno_ext.webp',
          description: `Fasada drewniana to synonim naturalnego piękna i ekologii, doskonale wpisująca się w otoczenie, jednocześnie zapewniając trwałość i funkcjonalność. Wykorzystujemy wysokiej jakości deski elewacyjne montowane pionowo, które poddawane są zaawansowanym procesom zabezpieczającym.`
        },
        {
          name: 'KOMBINACJA',
          image: '/assets/GIOIA_kombinacja_ext.webp',
          description: `Fasada drewniano-metalowa łączy naturalne piękno drewna z nowoczesnym wyglądem blachy na rąbek, tworząc elegancki i trwały efekt. Deski elewacyjne montowane pionowo dodają ciepła i przytulności, podczas gdy blacha na rąbek zapewnia nowoczesny akcent i wyjątkową ochronę.`
        }
      ],
      images: [
        'assets/main6.webp',
        'assets/main5.webp',
        'assets/main4.webp'
      ]
    }




  };